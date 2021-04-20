import { createGlobalStyle } from 'styled-components'

export const NanumSquare = createGlobalStyle`
@font-face {
    font-family: 'NanumSquare';
    font-weight: 400;
    src: url(${require('./font/NanumSquareR.eot')});
    src: url(${require('./font/NanumSquareR.eot?#iefix')} format('embedded-opentype'),
         url(${require('./font/NanumSquareR.woff')} format('woff'),
         url(${require('./font/NanumSquareR.ttf')} format('truetype');
   }
   @font-face {
    font-family: 'NanumSquare';
    font-weight: 700;
    src: url(${require('./font/NanumSquareB.eot')};
    src: url(${require('./font/NanumSquareB.eot?#iefix')} format('embedded-opentype'),
         url(${require('./font/NanumSquareB.woff')} format('woff'),
         url(${require('./font/NanumSquareB.ttf')} format('truetype');
   }
   @font-face {
    font-family: 'NanumSquare';
    font-weight: 800;
    src: url(${require('./font/NanumSquareEB.eot')};
    src: url(${require('./font/NanumSquareEB.eot?#iefix')} format('embedded-opentype'),
         url(${require('./font/NanumSquareEB.woff')} format('woff'),
         url(${require('./font/NanumSquareEB.ttf')} format('truetype');
   }
   @font-face {
    font-family: 'NanumSquare';
    font-weight: 300;
    src: url(${require('./font/NanumSquareL.eot')};
    src: url(${require('./font/NanumSquareL.eot?#iefix')} format('embedded-opentype'),
         url(${require('./font/NanumSquareL.woff')} format('woff'),
         url(${require('./font/NanumSquareL.ttf')} format('truetype');
   }
   `
