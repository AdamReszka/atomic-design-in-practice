import React from 'react';
import { StyledItem, StyledLink } from './styles';

const NavigationLink = ({ title, to }) => (
    <StyledItem>
        <StyledLink to={to}>
            {title}
        </StyledLink>
    </StyledItem>
);

export default NavigationLink;
