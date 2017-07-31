import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {  
  render() {
    return (
     <div>
        <div>{this.props.name}</div>
        <div>{this.props.lastname}</div>
        <div>{this.props.age}</div>
     </div>
    );
  }
}

User.propTypes = {
  //name:PropTypes.string,      // STRING
  lastname:PropTypes.string,  // STRING
  age:PropTypes.number,       // NUMBER
  //hobbies:PropTypes.array,    // ARRAY
  spanish:PropTypes.bool,   // NUMBER
  message:PropTypes.func,     // FUNCTION
  car:PropTypes.object,       // OBJECT

  //name: PropTypes.oneOf(['Francis', 'James']), // ACCEPT DIFFERENT VALUES

  name:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(['Francis', 'James'])
  ]),

  hobbies: PropTypes.arrayOf(PropTypes.string),
  //mother: PropTypes.string.isRequired,

  mother: function(props, propName, componentName) {
    if(props[propName] !== 'Martha'){
       return new Error(`The name ${props[propName]} is incorrect, should be Jane`)
    }
  }
}

export default User;
