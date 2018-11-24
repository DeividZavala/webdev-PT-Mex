import React, {Component} from 'react';

class Form extends Component{
    render(){
        return(
            <form>
                <div>
                    <label htmlFor="">
                        Titulo:
                        <input type="text" name="title"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Autor:
                        <input type="text" name="author"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        <textarea name="body" id="" cols="30" rows="10" placeholder="que tienes que decir"></textarea>
                    </label>
                </div>
                <button type="submit">Picale papá</button>
            </form>
        )
    }
}

export default Form;