import './home.scss';
import {
  FAQs, Banner, Programs,
  Testimonials, Values
} from './components';
import { Footer } from '../../components';

const Home = () => {
  return (
    <>
      <Banner />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
