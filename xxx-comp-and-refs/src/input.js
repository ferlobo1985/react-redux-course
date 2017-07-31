import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
		  
    this.state = {
        title:''
    }
  };

  getPet() {
    console.log(this.refs.petType.value)
  }
  
  render() {
    return (
        <div>
            <select ref="petType" name="petType">
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="ferret">Ferret</option>
            </select>
            <div onClick={()=>this.getPet()}>Get pet</div>
        </div>
    );
  }
}

export default Input;
