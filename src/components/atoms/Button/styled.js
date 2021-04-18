import styled from '@emotion/styled';
import { colors } from '../../../styles/variables';

export const StyledButton = styled('button')({
    fontSize: '1.6rem',
    padding: '1.2rem',
    backgroundColor: colors.blue,
    color: colors.white,
    border: `1px solid ${colors.blue}`,
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: colors.blueHover,
        borderColor: colors.blueHover,
    },
});
