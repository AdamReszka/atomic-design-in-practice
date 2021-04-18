import { StyledButton } from './styled';

const Button = ({ children, ...otherProps }) => {
    return (
        <StyledButton {...otherProps} >
            {children}
        </StyledButton>
    );
};

export default Button;
