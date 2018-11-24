import React, {Component} from 'react';

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



    handleChange = (e) => {
        const {form} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;
        this.setState({form});
        console.log(form);
    };

    render(){
        return(
            <form>
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