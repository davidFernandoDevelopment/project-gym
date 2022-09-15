import './plans.scss';
import { Banner, Card } from '../../UI';
import { plans } from '../../data';
import Image from '../../images/header_bg_4.jpg';

const Plans = () => {
  return (
    <>
      <Banner title='Membership Plans' image={Image}>
        Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Quasi minus nisi vel soluta sit.
        Suscribete a nuestros planes.
      </Banner>
      <section className="plans">
        <div className="plans__container container">
          {
            plans.map(({ id, name, desc, price, features }) => (
              <Card key={id} p='plan'>
                <h3 className='plan__name'>{name}</h3>
                <small className='plan__description'>{desc}</small>
                <h1 className='plan__price'>{`$${price}`}</h1>
                <h2 className='plan__currency'>/mes</h2>
                <h4 className='plan__title'>Features</h4>
                {
                  features.map(({ feature, available }, index) => (
                    <p
                      key={index}
                      className={`
                        plan__feature  ${!available ? 'plan__feature--disabled' : ''}
                      `}
                    >
                      {feature}
                    </p>
                  ))
                }
                <button className='plan__btn btn btn--large'>Choose Plan</button>
              </Card>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Plans;