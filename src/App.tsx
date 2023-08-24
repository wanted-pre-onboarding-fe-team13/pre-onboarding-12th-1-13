import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import Router from './routes';

import AuthProvider from './context/AuthProvider';

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
