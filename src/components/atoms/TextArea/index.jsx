import { StyledTextArea } from './styles';

const TextArea = ({ placeholder, otherProps }) => (
    <StyledTextArea
        rows="12"
        placeholder={placeholder}
        {...otherProps}
    />
);

export default TextArea;
