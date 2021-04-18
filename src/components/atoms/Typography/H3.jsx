import { StyledH3 } from './styles';

const H3 = ({ children, ...otherProps }) => (
    <StyledH3 {...otherProps}>
        {children}
    </StyledH3>
);

export default H3;
