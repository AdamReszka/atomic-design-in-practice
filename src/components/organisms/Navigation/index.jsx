import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            Navigation
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Navigation;
