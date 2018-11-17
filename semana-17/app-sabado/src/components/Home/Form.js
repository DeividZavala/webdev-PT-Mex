import React from 'react';

const Form = () => (
    <form className="form-container" >

        <label htmlFor="">
            Name:
            <input type="text" name="name"/>
        </label>
        <label htmlFor="">
            Age:
            <input type="number" step="1" name="age"/>
        </label>
        <button>Agregar papud</button>

    </form>
);

export default Form;