import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ui/Theme';
import Header from './ui/Header';
import Login from './components/Login';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/login" render={ (props)=> <Login {...props} /> } />
          <Route exact path="/register" component={() => <div>Sign Up</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
