import './contact.scss';
import Image from '../../images/header_bg_2.jpg';

import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import './contact.scss';
import { Banner } from '../../UI';

const Contact = () => {
  return (
    <>
      <Banner title='Get In Touch' image={Image}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ut natus hic error ?
      </Banner>
      <section className="contact">
        <div className="contact__container container">
          <div className="contact__wrapper">
            <a
              target="_blank"
              rel="noreferrer noopener"
              className='contact__link'
              href="mailto:dsanchezd21@gmail.com"
            >
              <MdEmail />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className='contact__link'
              href="mailto:dsanchezd21@gmail.com"
            >
              <BsMessenger />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className='contact__link'
              href="https://wa.me/+51945217181"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;