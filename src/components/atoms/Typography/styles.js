import styled from '@emotion/styled';

const StyledH1 = styled('h1')({
    fontSize: '6.8rem',
});

const StyledH2 = styled('h2')({
    fontSize: '5rem',
});

const StyledH3 = styled("h3")`
    font-size: 3.8rem;
    margin-bottom: ${
        props => props.noMargin ? '0' : '2rem'
    };
`;

const StyledP = styled('p')({
    fontSize: '2rem',
    padding: '1rem 2rem',
});

export {
    StyledH1,
    StyledH2,
    StyledH3,
    StyledP,
}
