import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            keywords:''
        }
    }

   render(){
       return(
        <header>
            <div className="logo" onClick={ () => console.log('i was clicked') }>Logo</div>
            <input placeholder="Search title" onChange={this.inputChange.bind(this)}/>
        </header>
       )
    }

    inputChange(event){
       this.setState({keywords:event.target.value});
       this.props.newsSearch(event.target.value)
    }

}

export default Header;