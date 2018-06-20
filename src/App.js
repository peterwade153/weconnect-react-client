import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Logout from './components/logout';
import CreateBusiness from './components/createbusiness';
import Business from './components/business';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/business" component={Business}/>
        <Route exact path="/addbusiness" component={CreateBusiness} />
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;
