import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import Router from './routes';

import AuthProvider from './context/AuthProvider';

import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
