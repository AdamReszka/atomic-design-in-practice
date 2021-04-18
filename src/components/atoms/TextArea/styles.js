import styled from '@emotion/styled';

import { colors } from "../../../styles/variables";

export const StyledTextArea = styled('textarea')({
    border: `1px solid ${colors.blue}`,
    borderRadius: '5px',
    fontSize: '1.6rem',
    padding: '1.2rem',
    width: '100%',
    fontFamily: 'sans-serif',
});
