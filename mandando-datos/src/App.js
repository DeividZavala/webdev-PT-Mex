import React, { Component } from 'react';
import './App.css';
import Router from './Routes';
import {withRouter} from 'react-router-dom';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: {
        username: "David",
        email: "crusedmoss@gmail.com",
        loggedIn: false
      }
    }
  }

  handleLogin = () => {
    let {user} = this.state;
    user.loggedIn = !user.loggedIn;
    this.setState({user});
  };

  handleRedirect = () => {
    this.props.history.push("/login");
  };

  render() {
    console.log("appjs", this.props);
    return (
      <div className="App">
        <nav>
            <button onClick={this.handleRedirect}>{this.state.user.loggedIn ? this.state.user.username: "login"}</button>
        </nav>
        <Router state={this.state} handleLogin={this.handleLogin} />
      </div>
    );
  }
}

export default withRouter(App);
