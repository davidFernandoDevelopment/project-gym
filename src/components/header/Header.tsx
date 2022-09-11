import { Link } from 'react-router-dom';
import Image from '../../images/main_header.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className="header__left">
          <h4 className='header__hash'>#100DaysOfWorkout</h4>
          <h1 className='header__title'>Join the legends of the first world!</h1>
          <p className='header__description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione modi iusto culpa accusamus, doloribus repudiandae esse pariatur corrupti eius. Illum harum, nulla dolore rerum ut veniam quisquam ad perferendis voluptate?
          </p>
          <Link className='header__button btn' to='plans'>Get Started</Link>
        </div>
        <div className="header__right">
          <div className="header__circle"></div>
          <div className="header__image-wrapper">
            <img src={Image} className='header__img' alt="Wrapper header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;