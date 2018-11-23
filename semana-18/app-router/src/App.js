import React, { Component } from 'react';
import Router from './Router';
import {Link, NavLink} from "react-router-dom";
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      count: 100
    }
  }

  handleClick = () => {
    let {count} = this.state;
    count++;
    this.setState({count});
  };

  render() {
    return (
      <div className="App">

          <nav>
              <NavLink exact to="/" activeClassName="active-route">Home</NavLink>
              <NavLink to="/login" activeClassName="active-route">Login</NavLink>
          </nav>

          <strong>{this.state.count}</strong>

          <button onClick={this.handleClick}>Picale</button>

          <Router/>
      </div>
    );
  }
}

export default App;
