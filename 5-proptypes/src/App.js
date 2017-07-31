import React, { Component } from 'react';
import User from './user'

class App extends Component {
  constructor(){
    super();

    this.state = {
      name:'Francis',
      lastname:'Jones',
      age:25,
      hobbies:['run','jump'],
      spanish:false,
      message(){console.log('hey')},
      car:{brand:"Ford",model:"Focus"},
      mother:'Martha'
    }

  }
  
  render() {
    return (
      <User {...this.state} ></User>
    );
  }
}

export default App;
