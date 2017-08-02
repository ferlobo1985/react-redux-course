import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListOfCars extends Component {

    listOfCars = ({list}) =>{
        if(list){
            return list.map((item)=>{
                return(
                    <Link to={`/car/${item.id}`} key={item.id} className="car_item">
                        <div className="left">
                            <img src={`/images/${item.image}`}/>
                        </div>
                        <div className="right">
                            <h4>{item.model}</h4>
                            <h6>{item.brand}</h6>
                        </div>
                    </Link>
                )
            })
        }
    }

    render() {
        return (
            <div className="main_results">
                {this.listOfCars(this.props.cars)}
            </div>
        );
    }

}

function mapStateToProps(state) {
    console.log(state)
    return {
        cars:state.cars
    }
}
export default connect(mapStateToProps,null)(ListOfCars);
