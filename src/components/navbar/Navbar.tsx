import { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

import './navbar.scss';
import { links } from '../../data';
import Logo from '../../images/logo.png';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav className='navbar'>
      <div className="container navbar__container">
        <Link to='/' className='navbar__logo'>
          <img src={Logo} alt="Navbar logo" />
        </Link>
        <ul
          className={`navbar__list ${isNavShowing
            ? 'navbar__list--show' : 'navbar__list--hidden'}`}
        >
          {
            links.map(({ name, path }, index) => (
              <li key={index} className='navbar__item'>
                <NavLink
                  to={path}
                  className={
                    ({ isActive }) =>
                      `navbar__link ${isActive ?
                        'navbar__link--active' : ''}`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <button
          className='navbar__toggle-btn'
          onClick={() => {
            console.log('MENU');
            setIsNavShowing(!isNavShowing);
          }}
        >
          {
            isNavShowing
              ? <MdOutlineClose className='navbar__toggle-btn-svg' />
              : <GoThreeBars className='navbar__toggle-btn-svg' />
          }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;