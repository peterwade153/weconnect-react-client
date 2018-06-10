import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Signup from './components/signup';
import Login from './components/login';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
