import React, {Component} from 'react';

class Detail extends Component{

    render(){
        return <h1>En el Details me mandaste {this.props.match.params.id}</h1>
    }
}

export default Detail;