import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@font-face {
    font-family: 'AppleSDGothicNeo';
    src: url('/fonts/AppleSDGothicNeo-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: url('/fonts/AppleSDGothicNeo-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  html, body {
    font-family: 'Pretendard', 'AppleSDGothicNeo';
    background-color: #fff;
    margin: 0;
    overflow-x: hidden;
    min-width: 100vw;
    min-height: 100vh;

    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
