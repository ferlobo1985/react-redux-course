import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
		  
    this.state = {
      data: 'Change with refs',
      color:'blue'
    }
  };

  changeText() {
   // this.setState({color:'red'});
    this.refs.myTitle.style.color = 'red';
  }

  render() {

    const style = {
      color: this.state.color
    }

    return (
        <div>
            <h4 style={style} ref="myTitle" >{this.state.data}</h4>
            <div onClick={()=>this.changeText()}>Change color</div>
         </div>
    );
  }
}

export default App;
