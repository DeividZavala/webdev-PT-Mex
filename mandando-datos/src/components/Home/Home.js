import React, {Component} from 'react';

class Home extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Home {this.props.state ? this.props.state.user.username:null}</h1>
                <strong>{this.props.state.user.loggedIn ? this.props.state.user.email: "No estas dentro perro"}</strong>
                <button onClick={this.props.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Home;