import React, {Component} from 'react';

class Uncontrolled extends Component {

    handleSubmitClick = () => {
        const values = {
            name: this.name.value,
            lastname: this.lastname.value
        }

        console.log(values)

    }



    render() {
        return (
            <div>
                <div>
                    <label>Enter name</label><br/>
                    <input type="text" ref={input => this.name = input}/>
                </div>

                <br/><br/>

                <div>
                    <label>Enter lastname</label><br/>
                    <input type="text" ref={input => this.lastname = input}/>
                </div>

                <br/><br/>

                <button onClick={this.handleSubmitClick}>Sign up</button>
            </div>
        )
    }

}

export default Uncontrolled;