import styled from '@emotion/styled';
import { colors } from '../../../styles/variables';

export const StyledForm = styled('form')({
    backgroundColor: colors.white,
    borderRadius: '8px',
    padding: '3rem',
    width: '60rem',
    webkitBoxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
    boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});
