import './styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';

import Navigation from './components/organisms/Navigation';
import Footer from './components/organisms/Footer';

const App = () => {
  return (
    <Router>
      <Navigation />
      <MainRouter />
      <Footer />
    </Router>
  );
}

export default App;
