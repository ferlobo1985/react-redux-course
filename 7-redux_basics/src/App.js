import React, { Component } from 'react';

// CONTAINERS
import MoviesList from './containers/movies_list'

class App extends Component {

  render() {
    return (
      <div className="App">
       <MoviesList/>
      </div>
    );
  }
}

export default App;
