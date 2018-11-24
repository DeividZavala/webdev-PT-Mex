import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{

    constructor(){
        super();
        this.state = {
            form: {
                title: "",
                author: "",
                body: ""
            }
        }
    }

    handleSubmit = (e) => {
        const base_url = "http://localhost:3000/api";
        e.preventDefault();
        const {form} = this.state;
        axios.post(`${base_url}/posts`, form)
            .then(() => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log(err);
                alert(err.msg);
            })
    };

    handleChange = (e) => {
        const {form} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;
        this.setState({form});
        console.log(form);
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">
                        Titulo:
                        <input type="text" name="title" onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Autor:
                        <input type="text" name="author" onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        <textarea
                            onChange={this.handleChange}
                            name="body"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="que tienes que decir"></textarea>
                    </label>
                </div>
                <button type="submit">Picale papá</button>
            </form>
        )
    }
}

export default Form;