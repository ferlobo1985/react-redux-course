import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

const URL_TEAMS = 'http://localhost:3005/teams';


const fadeAnimation = {
    transitionName:"fade",
    transitionAppear:true,
    transitionAppearTimeout:500,
    transitionEnter:true,
    transitionEnterTimeout:500,
    transitionLeave:true,
    transitionLeaveTimeout:300
}

class Teams extends Component{
    constructor(props){
        super(props)

        this.state = {
            teams:[],
            filtered:[],
            keyword:''
        }
    }

    componentDidMount() {
       fetch(`${URL_TEAMS}`, { method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({teams:json,filtered:json})
        })
    }

    searchTeam(event){
        const keyword = event.target.value;
        if(keyword !== ''){
            const list = this.state.teams.filter((item)=>{
               return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
            })
            this.setState({ 
                filtered:list,
                keyword
            })
        }else{
            this.setState({
                filtered:this.state.teams,
                keyword
            })
        }
    }


    renderList({filtered}){
            return filtered.map((item)=>{
                return(
                    <Link to={`/team/${item.name}`} key={item.id} className="team_item">
                        <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                    </Link>
                )
            })
    
    }

    render(){
        return(
            <div className="teams_component">
                <div className="teams_input"> 
                    <input type="text" 
                        value={this.state.keyword} 
                        onChange={e => this.searchTeam(e)}
                        placeholder="Search for a Team"
                        />
                </div>
                <div className="teams_container">
                    <CSSTransitionGroup {...fadeAnimation}>
                        {this.renderList(this.state)}
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    }


}

export default Teams;