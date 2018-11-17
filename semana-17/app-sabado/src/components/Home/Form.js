import React from 'react';

const Form = ({handleChange, data, dirty, handleSubmit}) => (
    <form className="form-container" onSubmit={handleSubmit}>

        <label htmlFor="">
            Name:
            <input type="text" value={data.name} name="name" onChange={handleChange}/>
            {data.name.length <= 3 && dirty ? <span>Hacen falta caracteres</span>: ""}
        </label>
        <label htmlFor="">
            Age:
            <input type="number" value={data.age} step="1" name="age" onChange={handleChange}/>
        </label>
        <button type="submit">Agregar papud</button>

    </form>
);

export default Form;