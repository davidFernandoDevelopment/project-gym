import { Link } from 'react-router-dom';

import './landing.scss';
import Image from '../../../../images/main_header.png';

const Landing = () => {
  return (
    <header className='landing'>
      <div className='landing__container container'>
        <div className="landing__left">
          <h4 className='landing__hash'>#100DaysOfWorkout</h4>
          <h1 className='landing__title'>Join the legends of the first world!</h1>
          <p className='landing__description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione modi iusto culpa accusamus, doloribus repudiandae esse pariatur corrupti eius. Illum harum, nulla dolore rerum ut veniam quisquam ad perferendis voluptate?
          </p>
          <Link className='landing__button btn' to='plans'>Get Started</Link>
        </div>
        <div className="landing__right">
          <div className="landing__circle"></div>
          <div className="landing__image-wrapper">
            <img src={Image} className='landing__img' alt="Wrapper Landing" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;