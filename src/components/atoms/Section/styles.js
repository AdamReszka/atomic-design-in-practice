import styled from '@emotion/styled';
import { colors } from '../../../styles/variables';

export const StyledSection = styled('section')({
    backgroundColor: colors.white,
    borderRadius: '8px',
    padding: '3rem',
    width: '100%',
    webkitBoxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
    boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
});
