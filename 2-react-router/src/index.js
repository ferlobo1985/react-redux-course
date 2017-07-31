import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';


// COMPONENTS
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Lifecycle from './components/lifecycle';

class App extends Component {
    render(){
        return <div>Home</div>
    }
}

// #1
// ReactDOM.render(
// <App/>, 
// document.querySelector('#root'))

// #2
ReactDOM.render(
<BrowserRouter>
    <div>
        <header>
            <Link to="/">Home</Link> <br/>
            <Link to="/posts">Posts</Link><br/>
            <Link to="/profile">Profile</Link><br/>
            <Link to="/lifecycle">LIFE</Link>
            <hr/>
        </header>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/posts" component={Posts}></Route>
        <Route exact path="/lifecycle" component={Lifecycle}></Route>
        <Route path="/posts/:id" component={PostItem}></Route>
        <Route path="/profile" component={Profile}></Route>
    </div>
</BrowserRouter>, 
document.querySelector('#root'))

