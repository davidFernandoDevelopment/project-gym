import './home.scss';
import {
  FAQs, Footer, Header, Programs,
  Testimonials, Values
} from '../../components';

const Home = () => {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
