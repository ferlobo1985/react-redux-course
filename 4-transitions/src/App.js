import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

// COMPONENTS
import Fade from './Fade';
import Slide from './Slide';
import Basic from './Basic';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <div className="anim_index">
          <Link to="/basic">Basic</Link>
          <Link to="/fade">Fade</Link>
          <Link to="/slide">Slide</Link>
        </div>
        <Route path="/basic" component={Basic}></Route>
        <Route path="/fade" component={Fade}></Route>
        <Route path="/slide" component={Slide}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
