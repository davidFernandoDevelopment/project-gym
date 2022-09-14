import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

import { Navbar, Footer } from './components';
import { About, Contact, Gallery, Home, NotFound, Plans, Trainers } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
