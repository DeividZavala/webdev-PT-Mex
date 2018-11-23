import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            users: ["Peter", "Gus", "Beto", "Adolfo", "Mena"],
            character: []
        };
    }

    rediretToLogin = () => {
        this.props.history.push("/login");
    };

    componentWillMount() {

        const base_url = 'https://swapi.co/api';
        axios.get(`${base_url}/people/`)
            .then(res => {
                console.log(res);
            })
    }

    render(){
        const {users} = this.state;
        return (
            <div>
                <h1>Home <button onClick={this.rediretToLogin}>De retache a login</button></h1>

                {users.map((user, index) => <Link
                    key={index}
                    to={`/loquesea/${user}`} >{user}</Link>)}

            </div>
        )
    }
}

export default Home;