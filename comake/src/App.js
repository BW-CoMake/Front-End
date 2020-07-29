import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ui/Theme';
import PrivateRoute from './components/PrivateRoute';
import Header from './ui/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route path="/about" component={() => <div>About</div>} />
          <Route exact path="/auth/login" render={ (props)=> <Login {...props} /> } />
          <Route path="/auth/register" render={ (props)=> <Signup {...props} /> } />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
