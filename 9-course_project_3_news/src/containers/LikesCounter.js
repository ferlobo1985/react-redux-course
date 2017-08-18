import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLikes } from '../actions'
import { bindActionCreators } from 'redux';

class LikesCounter extends Component {


    addLike = (action) =>{
        const props = this.props;
        const newLikes = action === 'ADD' ? [this.props.likes +1,this.props.dislikes] : [this.props.likes,this.props.dislikes + 1]


        this.props.handleLikes(newLikes,props.articleId,props.section,props.type)
    }


    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How do you feel about this.</h3>
                <div className="addlikes-container">
                    <div 
                    className="btn like"
                    onClick={()=>this.addLike('ADD')}>
                        <div className="hits">{this.props.likes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div 
                    className="btn dislike"
                    onClick={()=>this.addLike('REMOVE')}>
                        <div>{this.props.dislikes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}


function mapDispatchToProps(dispatch){
    return bindActionCreators({handleLikes}, dispatch);
}

export default connect(null,mapDispatchToProps)(LikesCounter)
