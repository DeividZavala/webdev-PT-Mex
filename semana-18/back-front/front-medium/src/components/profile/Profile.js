import React, {Component} from 'react';
import {updateUser} from "../../service";

class Profile extends Component{

    constructor(){
        super();
        this.state = {
            form: {
                email: ""
            }
        }
    }

    handleChange = (e) => {
        const {form} = this.state;
        let field = e.target.name;
        form[field] = e.target.files ? e.target.files[0] : e.target.value;
        this.setState({form});
        console.log(this.state.form);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.form);
        updateUser(this.props.match.params.id, this.state.form)

    };

    render(){
        return(
            <div>
                <img src="" alt=""/>
                <strong>Mi email</strong>


                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">
                            Email:
                            <input
                                type="text"
                                name="email"
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Foto:
                            <input
                                onClick={this.handleChange}
                                type="file"
                                name="picture"
                            />
                        </label>
                    </div>
                    <button type="submit">Actualizar</button>
                </form>

            </div>
        );
    }

}

export default Profile;