import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

import './trainers.scss';
import { Banner } from '../../UI';
import { trainers } from '../../data';
import { Trainer } from './components';
import Image from '../../images/header_bg_5.jpg';

const Trainers = () => {
  return (
    <>
      <Banner title='Our trainers' image={Image}>
        Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quibusdam ut natus hic error ?
      </Banner>
      <section className='trainers'>
        <div className="trainers__container container">
          {
            trainers.map(({ id, socials, ...rest }) => (
              <Trainer
                key={id}
                socials={[
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
                {...rest}
              />
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Trainers;