import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About';


const MainRouter = () => {
    return (
        <Switch>
            <Redirect from='/index.html' to='/'/>
            <Route path='/' exact component={HomePage} />
            <Route path='/about' exact component={AboutPage} />
            <Route path='/' render={() => <div>404</div>} />
        </Switch>
    );
}

export default MainRouter;