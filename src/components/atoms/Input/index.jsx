import { StyledInput } from './styles';

const Input = ({ children, ...otherProps }) => {
    return (
        <StyledInput {...otherProps} />
    );
};

export default Input;
