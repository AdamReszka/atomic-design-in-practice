import { Navbar, Title, NavigationLinks } from './styles';
import { NAVIGATION_CONFIG } from './navigation_config';
import NavigationLink from './NavigationLink';

const Navigation = ({ title }) => {
    return (
        <Navbar>
            <Title>    
                { title }
            </Title>
            <NavigationLinks>
                {
                    NAVIGATION_CONFIG.map(({ title, to }) => (
                        <NavigationLink 
                            title={title}
                            to={to}
                            key={title}
                        />
                    ))
                }
            </NavigationLinks>
        </Navbar>
    );
};

export default Navigation;
