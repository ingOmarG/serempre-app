import React from 'react';
import LogoApp from '../../../assets/img/Logo.png';
import { StyledHeader, StyledImage } from './StyledHeader';

export const Header = () => {
    return (
        <StyledHeader>
            <StyledImage src={LogoApp} alt="Serempre" title="Logo Serempre" />
        </StyledHeader>
    );
}