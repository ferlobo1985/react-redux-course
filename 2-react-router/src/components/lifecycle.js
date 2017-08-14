import React,{ Component } from 'react';

class Lifecycle extends Component {
    // 1 GET DEFAULT PROPS
    constructor(props){
        super(props)

        // 2 SET INITIAL STATE.
        this.state = {
            title:'Pulp fiction in cinemas',
            body:'some dummy text for the body'
        }   
    }

    // 3 BEFORE COMPONENT GETS CREATED
    componentWillMount(){
        console.log('BEFORE COMPONENT GETS CREATED')
    }


    shouldComponentUpdate(nextProps, nextState){
      //  console.log(this.state.title)
      //  console.log(nextState.title)

        if(nextState.title === "something else"){
            return false
        }
        return true

       //return false
    }
    componentWillUpdate(){
        console.log('BEFORE UPDATE')
    }
    componentDidUpdate(){
        console.log('AFTER UPDATE')
    }



    componentWillUnmount(){
         console.log('UNMOUNT COMPONENT')
    }

    // 4 RENDER JSX
    render(){
        return (
            <div>
               <h1>{this.state.title}</h1>  
               <br/>
               <div>{this.state.body}</div>
               <div onClick={()=> this.setState({title:'something else'})}>CLICK TO CHANGE</div>              
            </div>
        )
    }

    // 5 AFTER A COMPONENT IS MOUNTED OR CREATED
    componentDidMount(){
        console.log('AFTER A COMPONENT IS MOUNTED OR CREATED')
        document.querySelector('h1').style.color = 'red';
    }


}

export default Lifecycle;