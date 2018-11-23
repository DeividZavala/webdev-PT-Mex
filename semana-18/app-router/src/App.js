import React, { Component } from 'react';
import Router from './Router';
import {Link} from "react-router-dom";
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
              <Link to="/" style={{marginRight: "2%"}}>Home</Link>
              <Link to="/login">Login</Link>
          </nav>

          <strong>{this.state.count}</strong>

          <button onClick={this.handleClick}>Picale</button>

          <Router/>
      </div>
    );
  }
}

export default App;
