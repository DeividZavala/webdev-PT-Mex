import React from 'react';

const Form = ({handleChange}) => (
    <form className="form-container" >

        <label htmlFor="">
            Name:
            <input type="text" name="name" onChange={handleChange}/>
        </label>
        <label htmlFor="">
            Age:
            <input type="number" step="1" name="age" onChange={handleChange}/>
        </label>
        <button>Agregar papud</button>

    </form>
);

export default Form;