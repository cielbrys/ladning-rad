import React from 'react';
import styled from 'styled-components';
import backgroundPattern from './Assets/backgroundPattern.svg';
import Logo from './Components/Logo';
import Form from './Components/Form';

const GlobalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundPattern}) repeat center;
`;

const App = () => {
  return (
    <GlobalWrapper>
      <Logo />
      <Form />
    </GlobalWrapper>
  );
};

export default App;
