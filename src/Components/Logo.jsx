import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo.svg';

const LogoImg = styled.img`
  margin-top: 16px;
  margin-left: 16px;
`;

const Logo = () => {
  return (
    <a href='https://www.academicshop.eu/' rel='noreferrer' target='_blank'>
      <LogoImg src={logo} alt='Logo' />
    </a>
  );
};

export default Logo;
