import React, {Component} from 'react';

class Profile extends Component{

    render(){
        return(
            <div>
                <img src="" alt=""/>
                <strong>Mi email</strong>


                <form>
                    <div>
                        <label htmlFor="">
                            Email:
                            <input
                                type="text"
                                name="email"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Foto:
                            <input
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