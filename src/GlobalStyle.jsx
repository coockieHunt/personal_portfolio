import { createGlobalStyle } from 'styled-components';

//config
import { Color } from './config';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    background: ${Color.background};
    background-image: ${Color.background_image};
    background-repeat: no-repeat;
    background-attachment: fixed;

    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: white;
  }
`;
 
export default GlobalStyle;