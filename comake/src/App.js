import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ui/Theme';
import PrivateRoute from './components/PrivateRoute';
import Header from './ui/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AddIssue from './components/AddIssue';
import Issue from './components/Issue';
import MyIssue from './components/MyIssue';
import MyIssues from './components/MyIssues';

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
          <PrivateRoute path="/issues" component={Dashboard} />
          <PrivateRoute path="/issues/:id" component={Issue} />
          <PrivateRoute path="/addIssue" component={AddIssue} />
          <PrivateRoute path="/myIssues/:id" component={MyIssue} />
          <PrivateRoute path="/myIssues" component={MyIssues} /> 
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
