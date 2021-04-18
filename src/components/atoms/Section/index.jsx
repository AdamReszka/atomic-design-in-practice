import { StyledSection } from "./styles";

const Section = ({ children, otherProps }) => (
    <StyledSection {...otherProps}>
        {children}
    </StyledSection>
);

export default Section;
