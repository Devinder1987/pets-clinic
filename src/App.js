import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import Footer from './components/Footer/Footer';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Pages />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
