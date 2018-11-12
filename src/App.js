import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/"> Home </NavLink>
                <NavLink activeClassName="selected" to="/History"> Notre Histoire </NavLink>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/history" component={History} />
              </Switch>
            </div>
        );
    }
}

export default App;
