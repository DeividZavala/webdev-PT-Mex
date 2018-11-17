import React from 'react';

const Form = ({handleChange, data, dirty}) => (
    <form className="form-container" >

        <label htmlFor="">
            Name:
            <input type="text" name="name" onChange={handleChange}/>
            {data.name.length <= 3 && dirty ? <span>Hacen falta caracteres</span>: ""}
        </label>
        <label htmlFor="">
            Age:
            <input type="number" step="1" name="age" onChange={handleChange}/>
        </label>
        <button>Agregar papud</button>

    </form>
);

export default Form;