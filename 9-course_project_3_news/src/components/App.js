import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// COMPONENTS
import Header from './Header'

// CONTAINERS
import Home from '../containers/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
