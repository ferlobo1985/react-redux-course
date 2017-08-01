import React, { Component } from 'react';

import Search from '../containers/search';
import ListOfCars from '../containers/list_of_cars';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <ListOfCars/>
      </div>
    );
  }
}

export default App;
