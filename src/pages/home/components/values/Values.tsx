import { GiCutDiamond } from 'react-icons/gi';

import './values.scss';
import { Card } from '../../../../UI';
import { values } from '../../../../data';
import Image from '../../../../images/values.jpg';
import { SectionHead } from '../../../../components';


const Values = () => {
  return (
    <section className='values'>
      <div className="values__container container">
        <div className="values__left">
          <div className="values__image">
            <img className="values__img" src={Image} alt="Values" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead
            title='Values'
            icon={GiCutDiamond}
          />
          <p className="values__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium magni aliquid fuga numquam hic illo esse illum est laudantium laborum tempora minima quibusdam necessitatibus magnam excepturi, mollitia recusandae dicta obcaecati?
          </p>
          <div className="values__wrapper">
            {
              values.map(({ id, title, desc, icon: Icon }) => (
                <Card p='values__value' key={id}>
                  <span className='values__value-icon'>
                    <Icon />
                  </span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;