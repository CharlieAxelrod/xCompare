import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import En from './En.js';
import Pt from './Pt.js';

class App extends Component {
  render() {
    return (
      <div>
      <ul>
        <li>
          <NavLink to="/en">EN</NavLink>
        </li>
        <li>
          <NavLink to="/pt">PT</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/en" component={En} />
        <Route path="/pt" component={Pt} />
      </Switch>
    </div>
    ); 
  }
}

export default App;
