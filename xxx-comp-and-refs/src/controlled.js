import React, {Component} from 'react';

class Controlled extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'a',
            lastname: ''
        }
    };

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleLastnameChange = (event) => {
        this.setState({lastname: event.target.value})
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState)
    }

    render() {
        return (
            <form>
                <div>
                    <label>Enter name</label><br/>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </div>

                <br/><br/>

                <div>
                    <label>Enter lastname</label><br/>
                    <input type="text" value={this.state.lastname} onChange={this.handleLastnameChange}/>
                </div>

            </form>
        )
    }

}

export default Controlled;