import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


// COMPONENTS
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Teams from "./components/teams";
import Team from "./components/team";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/teams" component={Teams}></Route>
          <Route exact path="/team/:id" component={Team}></Route>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

//           <Route path="/teams" component={Teams}></Route>

export default App;
