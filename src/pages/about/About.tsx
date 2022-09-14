import './about.scss';
import { Banner } from '../../UI';
import { Section } from './components';
import Image from '../../images/header_bg_1.jpg';
import ImageStory from '../../images/about1.jpg';
import ImageVision from '../../images/about2.jpg';
import ImageMision from '../../images/about3.jpg';

const About = () => {
  return (
    <>
      <Banner title='About' image={Image}>
        Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Quasi minus nisi vel soluta sit, ipsum, quod
        numquam tempora distinctio dicta fuga quae tempore
        placeat voluptatum. Ea labore accusantium nihil? C
        upiditate.
      </Banner>

      <Section image={ImageStory}>
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quasi minus nisi vel soluta sit, ipsum, quod
          numquam tempora distinctio dicta fuga quae tempore
          placeat voluptatum. Ea labore accusantium nihil? C
          upiditate.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ea labore accusantium nihil? C
          upiditate.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit.
        </p>
      </Section>

      <Section className='section--reverse' image={ImageMision}>
        <h1>Our Vision</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quasi minus nisi vel soluta sit, ipsum, quod
          numquam tempora distinctio dicta fuga quae tempore
          placeat voluptatum. Ea labore accusantium nihil? C
          upiditate.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ea labore accusantium nihil? C
          upiditate.
        </p>
      </Section>


      <Section image={ImageVision}>
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quasi minus nisi vel soluta sit, ipsum, quod
          numquam tempora distinctio dicta fuga quae tempore
          placeat voluptatum. Ea labore accusantium nihil? C
          upiditate.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ea labore accusantium nihil? C
          upiditate.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit.
        </p>
      </Section>
    </>
  );
};

export default About;