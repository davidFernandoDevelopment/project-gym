import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

import { Navbar } from './components';
import { Home, About } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Home />
    </Router>
  );
}

export default App;
