import {createGlobalStyle} from 'styled-components';
import AlegreyaRegularTtf from '../../fonts/Alegreya/AlegreyaRegularTtf.ttf';
import AlegreyaRegularWoff from '../../fonts/Alegreya/Alegreya-Regular.woff';
import AlegreyaRegularWoff2 from '../../fonts/Alegreya/Alegreya-Regular.woff2';
import AlegreyaSansRegularTtf from '../../fonts/AlegreyaSans/AlegreyaSans-Regular.ttf';
import AlegreyaSansRegularWoff from '../../fonts/AlegreyaSans/AlegreyaSans-Regular.woff';
import AlegreyaSansRegularWoff2 from '../../fonts/AlegreyaSans/AlegreyaSans-Regular.woff2';
import AlegreyaSansMediumTtf from '../../fonts/AlegreyaSans/AlegreyaSans-Medium.ttf';
import AlegreyaSansMediumWoff from '../../fonts/AlegreyaSans/AlegreyaSans-Medium.woff';
import AlegreyaSansMediumWoff2 from '../../fonts/AlegreyaSans/AlegreyaSans-Medium.woff2';


export const Global = createGlobalStyle`

  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;

    background-color: #fff;

    max-width: 1920px;

    @font-face {
      font-family: 'Alegreya';
      src:
      url(${AlegreyaRegularWoff2}) format('woff2'),
      url(${AlegreyaRegularWoff}) format('woff'),
      url(${AlegreyaRegularTtf}) format('truetype');
      font-weight: 400;
      font-display: swap;
    }

    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0
    }

    @font-face {
      font-family: 'AlegreyaSans';
      src:
      url(${AlegreyaSansRegularWoff2}) format('woff2'),
      url(${AlegreyaSansRegularWoff}) format('woff'),
      url(${AlegreyaSansRegularTtf}) format('truetype');
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: 'AlegreyaSans';
      src: url(${AlegreyaSansMediumWoff2}) format('woff2'),
      url(${AlegreyaSansMediumWoff}) format('woff'),
      url(${AlegreyaSansMediumTtf}) format('truetype');
      font-weight: 500;
      font-display: swap;
    }
  }
`
