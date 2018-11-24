import React, {Component} from 'react';
import axios from 'axios';

class Detail extends Component{

    constructor(){
        super();
        this.state = {
            post: {}
        }
    }

    componentWillMount() {
        const base_url = "http://localhost:3000/api";
        axios.get(`${base_url}/posts/${this.props.match.params.id}`)
            .then(res => {
                console.log(res);
                const {post} = res.data;
                this.setState({post})
            })
    }

    render(){
        const {post} = this.state;
        return(
            <div>
                <h1>{post.title}</h1>
            </div>
        );
    }
}

export default Detail;