import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
