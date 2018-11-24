import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        const base_url = "http://localhost:3000/api";
        axios.get(`${base_url}/posts/`)
            .then(res => {
                this.setState({posts: res.data.posts});
            })
    }

    render(){
        const {posts} = this.state;
        return (
            <div>
                <h4>Lista de posts</h4>
                {posts.length > 0 ? <ul></ul> : <strong>No hay nada</strong>}
            </div>
        );
    }
}

export default Home;