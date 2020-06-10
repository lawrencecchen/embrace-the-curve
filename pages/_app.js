import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: var(--default-font);
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    height: auto;
    scroll-behavior: smooth;
  }

  :root {
    --cultured: #E8F1F2;
    --black: #101010;
    --red: #C33149;
    --dark-green: #0C4E3C;
    --eton-blue: #83BC9F;
    --white: #FFFFFF;
    --accent: #707070;
    --default-font: 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --speed: 225ms;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
