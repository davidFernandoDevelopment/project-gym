import { Link } from 'react-router-dom';

import './banner.scss';
import Image from '../../../../images/main_header.png';

const Banner = () => {
  return (
    <header className='banner'>
      <div className='banner__container container'>
        <div className="banner__left">
          <h4 className='banner__hash'>#100DaysOfWorkout</h4>
          <h1 className='banner__title'>Join the legends of the first world!</h1>
          <p className='banner__description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione modi iusto culpa accusamus, doloribus repudiandae esse pariatur corrupti eius. Illum harum, nulla dolore rerum ut veniam quisquam ad perferendis voluptate?
          </p>
          <Link className='banner__button btn' to='plans'>Get Started</Link>
        </div>
        <div className="banner__right">
          <div className="banner__circle"></div>
          <div className="banner__image-wrapper">
            <img src={Image} className='banner__img' alt="Wrapper banner" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;