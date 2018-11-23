import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            users: ["Peter", "Gus", "Beto", "Adolfo", "Mena"],
            characters: []
        };
    }

    rediretToLogin = () => {
        this.props.history.push("/login");
    };

    componentWillMount() {
        let {characters} = this.state;
        const base_url = 'https://swapi.co/api';
        axios.get(`${base_url}/people/`)
            .then(res => {
                characters = res.data.results;
                this.setState({characters})
            })
    }

    render(){
        const {users, characters} = this.state;
        return (
            <div>
                <h1>Home <button onClick={this.rediretToLogin}>De retache a login</button></h1>

                {users.map((user, index) => <Link
                    key={index}
                    to={`/loquesea/${user}`} >{user}</Link>)}

                {characters.map((character, index) => <Link
                    key={index}
                    to={`/loquesea/${index+1}`} >{character.name}</Link>)}

            </div>
        )
    }
}

export default Home;