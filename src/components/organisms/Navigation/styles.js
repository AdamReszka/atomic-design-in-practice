import styled from '@emotion/styled';
import { colors } from '../../../styles/variables';
import { Link } from 'react-router-dom';

const Navbar = styled('nav')({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
    height: '5rem',
    padding: '0 2rem',
});

const Title = styled('p')({
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '1.6rem',
});

const NavigationLinks = styled('ul')({
    display: 'flex',
    padding: '0 2rem',
    listStyle: 'none',
    height: '100%',
});

const StyledItem = styled('li')({
    height: '100%'
});

const StyledLink = styled(Link)({
    display: 'flex',
    padding: '0 2rem',
    alignItems: 'center',
    height: '100%',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.3rem',
    '&:hover': {
        backgroundColor: colors.blueHover,
    }
});

export {
    Navbar,
    Title,
    NavigationLinks,
    StyledItem,
    StyledLink,
}
