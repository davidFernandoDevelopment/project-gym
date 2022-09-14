import './home.scss';
import {
  FAQs, Landing, Programs,
  Testimonials, Values
} from './components';

const Home = () => {
  return (
    <>
      <Landing />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
