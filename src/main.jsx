import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { COLORS } from './Constants/Color';

const GlobalStyle = createGlobalStyle`


 body{
  font-family: new-rubrik-edge, sans-serif;
  background-color: ${COLORS.green};
  margin: 0;
  color: ${COLORS.white};
 }

  p, h1{
    margin: 0;
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
