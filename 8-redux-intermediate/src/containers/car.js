import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carDetail,clearDetail } from '../actions'
import { bindActionCreators } from 'redux';


class Car extends Component {

  componentDidMount(){
    this.props.carDetail(this.props.match.params.id)
  }

  componentWillUnmount(){
    this.props.clearDetail();
  }

  renderDetail= ({detail}) => {
      if(detail)
        return detail.map((item)=>{
          return (
            <div key={item.id} className="car_detail">
               <img src={`/images/${item.image}`}/>
               <div className="content">
                  <h2>{item.model}</h2>
                  <h4>{item.brand}</h4>
                  <p>
                      {item.description}
                  </p>
               </div>
            </div>
          )
        })
  }


  render() {
    return (
      <div className="car_detail">
        {this.renderDetail(this.props.cars)}
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


function mapDispatchToProps(dispatch){
    return bindActionCreators({carDetail,clearDetail}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Car)
