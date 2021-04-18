import styled from '@emotion/styled';
import { colors, dimensions } from '../../../styles/variables';

const StyledFooter = styled('footer')({
    width: '100%',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.footerHeight,
    backgroundColor: colors.blue,
    color: colors.white,
    boxSizing: 'border-box',
    position: 'absolute',
    bottom: '0',
    left: '0',
});

export {
    StyledFooter
}
