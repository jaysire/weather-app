import React from 'react';
import Titles from "./components/Titles.js";  // you can leave out the .js extension here.
import Form from "./components/Form.js";
import Weather from './components/Weather.js';

const API_KEY = "717d8258895a8589755edb6bc0463525";

class App extends React.Component {
  
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

    getWeather = async (e) => {

      e.preventDefault();

      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      
      const data = await api_call.json();  // json function method efficiently converts api data we receive into a readerble format. 

      if (city && country) {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
  
      } else {

        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Plese enter City and State to check weather"
      });
      }
      }

    render() {
      return (
        <div>
          <div className="wrapper">
            <div clssName="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                   <Titles/>   
                    </div>
                      <div className="col-xs-7 form-container">
                        <Form getWeather = {this.getWeather}/>
                        <Weather 
                        temperature = {this.state.temperature}
                        city = {this.state.city}
                        country = {this.state.country}
                        humidity = {this.state.humidity}
                        description = {this.state.description}
                        error = {this.state.error}
                    />
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>

      );
    }
}

export default App;