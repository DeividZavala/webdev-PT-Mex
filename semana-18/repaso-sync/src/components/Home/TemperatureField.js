import React from 'react';

const TemperatureField = ({scale, handleChange, temp}) => (
    <div>
        <label htmlFor="">
            Ingresa la temperatura en {scale === "c" ? "Celsius": "Fahrenheit"}
            <input
                value={temp}
                type="text"
                name={scale}
                onChange={handleChange}/>
        </label>
    </div>
);

export default TemperatureField;