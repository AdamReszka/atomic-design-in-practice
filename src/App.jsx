import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';

import Navigation from './components/organisms/Navigation';
import Footer from './components/organisms/Footer';

const App = () => {
  const APP_TITLE = 'Atomic Design w praktyce';

  return (
    <Router>
      <Navigation title={APP_TITLE}/>
      <MainRouter />
      <Footer />
    </Router>
  );
}

export default App;
