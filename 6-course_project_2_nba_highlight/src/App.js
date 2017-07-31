import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


// COMPONENTS
import Header from "./components/header";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header></Header>
          <Route exact path="/" component={Home}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

//           <Route path="/teams" component={Teams}></Route>

export default App;
