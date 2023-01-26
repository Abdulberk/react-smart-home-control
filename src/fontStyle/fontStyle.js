import { createGlobalStyle } from "styled-components";
import SevenSegment from "../fonts/DSEG7Classic-Regular.woff";
import SevenSegment2 from "../fonts/DSEG7Classic-Regular.woff2";



const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'SevenSegment';
  src: url(${SevenSegment}) format('woff'),
        url(${SevenSegment2}) format('woff2');


    font-weight: 300;

}
`;

export default FontStyles;