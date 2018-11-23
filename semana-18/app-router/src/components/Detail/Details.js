import React, {Component} from 'react';

class Detail extends Component{

    componentWillMount() {
        const base_url = 'https://swapi.co/api';
        const {id} = this.props.match.params;
        fetch(`${base_url}/people/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))

    }

    render(){
        return <h1>En el Details me mandaste {this.props.match.params.id}</h1>
    }
}

export default Detail;