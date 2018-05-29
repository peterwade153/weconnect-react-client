import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Signup from './components/signup';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Signup} />
      </div>
    );
  }
}

export default App;
