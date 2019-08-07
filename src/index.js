import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import store from './store';
import theme from './theme';
import App from './App';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway');

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  color: ${theme.dark};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #216ba5;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: lighten(#216ba5, 20%);
}

.fade-appear .fade-enter {
  opacity: 0;
  z-index: 10;
}

.fade-appear-active 
.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 0.6s linear 0.3s;
}

.fade-exit {
  opacity: 1;
}

.fade-exit.fade-exit-active {
  opacity: 0;
  transition: opacity 0.3s linear;
}
`;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <GlobalStyles />
          <App />
        </>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
