import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <article className='footer__links'>
          <Link className='footer__logo' to="/">
            <img className='footer__logo-img' src={Logo} alt="Footer Logo" />
          </Link>
          <p className='footer__description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati alias, sit ullam nulla dolor qui quisquam illum assumenda quia commodi quis. Ab iure quis, adipisci nostrum atque sapiente voluptate obcaecati?
          </p>
          <div className="footer__socials">
            <a
              className='footer__socials-icon'
              target='_blank'
              rel='noreferrer noopener'
              href="https://linkedin.com"
            >
              <FaLinkedin />
            </a>
            <a
              className='footer__socials-icon'
              target='_blank'
              rel='noreferrer noopener'
              href="https://linkedin.com"
            >
              <FaFacebook />
            </a>
            <a
              className='footer__socials-icon'
              target='_blank'
              rel='noreferrer noopener'
              href="https://linkedin.com"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className='footer__socials-icon'
              target='_blank'
              rel='noreferrer noopener'
              href="https://linkedin.com"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </article>

        <article className='footer__links'>
          <h4 className='footer__link-title'>Permalinks</h4>
          <Link to="about">about</Link>
          <Link to="gallery">gallery</Link>
          <Link to="plans">plans</Link>
          <Link to="trainers">trainers</Link>
          <Link to="contact">contact</Link>
        </article>
        <article className='footer__links'>
          <h4 className='footer__link-title'>Insights</h4>
          <Link to="/s">blogs</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Comunities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article className='footer__links'>
          <h4 className='footer__link-title'>Get In Touch</h4>
          <Link to="/contact">Contact us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>

      <div className="footer__copyright">
        <small>
          2022 David F. Sánchez &copy; Todos los derechos reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;