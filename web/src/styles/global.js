import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }
*:focus {
  outline:0;
}

html,body,#root {
    height:100%;
}

body{
  background:#e5e6f0;
  -webkit-font-smooting:antialiased;
}

body,input,button {
    font:16px 'Roboto', sans-serif;
}
button {
    cursor: pointer;
}
`;
