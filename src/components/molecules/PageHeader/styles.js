import styled from '@emotion/styled';

const HeaderSection = styled('section')({
    width: '100%',
    display: 'flex',
    padding: '4rem 2rem',
    fontWeight: 600,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
});

const HeaderIMG = styled('img')({
    width: '5.4rem',
    height: '5.4rem',
    display: 'block',
    marginRight: '2rem'
});

export {
    HeaderSection,
    HeaderIMG
}
