import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './ui/Header';


function App() {
  return (
    <ThemeProvider>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
