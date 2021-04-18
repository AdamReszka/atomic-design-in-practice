import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';
import OurHistory from './components/pages/OurHistory';
import ContactPage from './components/pages/Contact';
import PageNotFound from './components/pages/PageNotFound';

const MainRouter = () => {
    return (
        <Switch>
            <Redirect from='/index.html' to='/'/>
            <Route path='/' exact component={HomePage} />
            <Route path='/about' exact component={AboutPage} />
            <Route path='/ourhistory' exact component={OurHistory} />
            <Route path='/contact' exact component={ContactPage} />
            <Route path='/' component={PageNotFound} />
        </Switch>
    );
}

export default MainRouter;