class React {
    constructor(){
        this.props = 4;
    }

    whateverfunction(){
        console.log('hey')
    }
}

class Ford extends React {
    constructor(props){
        super(props);
    }
}

const car = new React();
const ford = new Ford();


