import { createGlobalStyle } from 'styled-components';

//config
import { Color } from './config';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${Color.background};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: white;
  }
`;
 
export default GlobalStyle;