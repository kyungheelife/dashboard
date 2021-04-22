import { createGlobalStyle }  from 'styled-components'

import NanumSquareREot from './fonts/NanumSquareR.eot'
import NanumSquareRWoff from './fonts/NanumSquareR.woff' 
import NanumSquareRTTf from './fonts/NanumSquareR.ttf'

import NanumSquareBEot from './fonts/NanumSquareB.eot'
import NanumSquareBWoff from './fonts/NanumSquareB.woff'
import NanumSquareBTTf from './fonts/NanumSquareB.ttf'

import NanumSquareEBEot from './fonts/NanumSquareEB.eot'
import NanumSquareEBWoff from './fonts/NanumSquareEB.woff'
import NanumSquareEBTTf from './fonts/NanumSquareEB.ttf'

import NanumSquareLEot from './fonts/NanumSquareL.eot'
import NanumSquareLWoff from './fonts/NanumSquareL.woff'
import NanumSquareLTTf from './fonts/NanumSquareL.ttf'


console.log(NanumSquareBEot)

export const NanumSquare = createGlobalStyle`
@font-face {
    font-family: 'NanumSquare';
    font-weight: 400;
    src: url(${NanumSquareREot});
    src: url(${NanumSquareREot} format('embedded-opentype'),
         url(${NanumSquareRWoff} format('woff'),
         url(${NanumSquareRTTf} format('truetype');
}
@font-face {
font-family: 'NanumSquare';
font-weight: 700;
src: url(${NanumSquareBEot};
src: url(${NanumSquareBEot} format('embedded-opentype'),
      url(${NanumSquareBWoff} format('woff'),
      url(${NanumSquareBTTf} format('truetype');
}
@font-face {
font-family: 'NanumSquare';
font-weight: 800;
src: url(${NanumSquareEBEot};
src: url(${NanumSquareEBEot} format('embedded-opentype'),
      url(${NanumSquareEBWoff} format('woff'),
      url(${NanumSquareEBTTf} format('truetype');
}
@font-face {
font-family: 'NanumSquare';
font-weight: 300;
src: url(${NanumSquareLEot};
src: url(${NanumSquareLEot} format('embedded-opentype'),
      url(${NanumSquareLWoff} format('woff'),
      url(${NanumSquareLTTf} format('truetype');
}
`
