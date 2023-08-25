import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  body {
  background-color: #f9f9fb;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Pretendard-Regular', 'Arial Narrow', Arial, sans-serif;
  font-weight: 400;
  }
`;

export default GlobalStyle;
