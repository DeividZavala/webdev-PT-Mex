import React, {Component} from 'react';
import axios from 'axios';
class Detail extends Component{

    componentWillMount() {
        const base_url = 'https://swapi.co/api';
        const {id} = this.props.match.params;
        const url = `https://swapi.co/api/people/${id}`;
        console.log(url);
        fetch(base_url+"/people", {mode: "no-cors"})
            .then(res => res.json())
            .then(data => console.log(data));


    }

    render(){
        return <h1>En el Details me mandaste {this.props.match.params.id}</h1>
    }
}

export default Detail;