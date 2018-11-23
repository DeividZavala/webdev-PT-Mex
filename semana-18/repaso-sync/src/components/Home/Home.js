import React, {Component} from 'react';
import TemperatureField from './TemperatureField';

 class Home extends Component{

     constructor(){
         super();
         this.state = {
             temperature: "",
             scale : "c"
         }
     }

     toCelsius = (temperature) => {
         if(isNaN(temperature)) return;
         return (temperature - 32) * 5 / 9;
     };

     toFahrenheit = (temperature) => {
         if(isNaN(temperature)) return;
         return (temperature * 9 / 5) + 32;
     };

     handleChange = (e) => {
         let {scale, temperature} = this.state;
         scale = e.target.name;
         temperature = e.target.value;
         this.setState({scale, temperature});
     };

    render(){
        const {scale, temperature} = this.state;
        const fahrenheit = scale === "c" ? this.toFahrenheit(temperature) : temperature;
        const celsius = scale === "f" ? this.toCelsius(temperature) : temperature;
        return(
            <div>
                <h4>Calculadora de temperatura</h4>
                <div className="fields-container">
                    <TemperatureField
                        temp={celsius}
                        scale="c"
                        handleChange={this.handleChange}/>
                    <TemperatureField
                        temp={fahrenheit}
                        scale="f"
                        handleChange={this.handleChange}/>
                </div>
            </div>
        )
    }

}

export default Home;