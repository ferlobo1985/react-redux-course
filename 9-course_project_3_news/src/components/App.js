import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// COMPONENTS
import Header from './Header'
import Footer from './Footer'

// CONTAINERS
import Home from '../containers/Home'
import News from '../containers/News'
import GalleryItem from '../containers/GalleryItem'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/news/:id" component={News}/>
            <Route exact path="/galleries/:id" component={GalleryItem}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
