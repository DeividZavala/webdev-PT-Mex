import React, {Component} from 'react';
import axios from 'axios';
import ListItem from './ListItem';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            posts: []
        };
        this.base_url = "http://localhost:3000/api";
    }

    componentWillMount() {
        axios.get(`${this.base_url}/posts/`,{
            headers: {
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZjlkNDUyNGYzZjVlNzJmYmIxYjFkNSIsImlhdCI6MTU0MzEwMjIwOCwiZXhwIjoxNTQzMTEwODA4fQ.EF2vak-Ll_ABo9IAU8K5hJ5guJsZ2Z8PB4NZ7ew3I8Q"
            }
        })
            .then(res => {
                this.setState({posts: res.data.posts});
            })
    }

    deleteItem = (id) => {
        axios.delete(`${this.base_url}/posts/${id}`)
            .then(() => {
                let {posts} = this.state;
                posts = posts.filter(post => {
                    return post._id !== id;
                });
                this.setState({posts});
            })
    };

    render(){
        const {posts} = this.state;
        return (
            <div>
                <h4>Lista de posts</h4>
                {posts.length > 0 ?
                    <ul>
                        {posts.map(post => <ListItem deleteItem={this.deleteItem} key={post._id} {...post} />) }
                    </ul>
                    : <strong>No hay nada</strong>}
            </div>
        );
    }
}

export default Home;