import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{padding: 0; margin: 0}

${
  '' /* body {
  margin: 0;
  font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;

export default GlobalStyle;
