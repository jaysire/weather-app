
import React from 'react';
import Titles from "./components/Titles.js";  // you can leave out the .js extension here.
import Form from "./components/Form.js";
import Weather from './components/Weather.js';


const API_KEY = "717d8258895a8589755edb6bc0463525";

class App extends React.Component {

    getWeather = async (e) => {

      e.preventDefault();

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
      
      const data = await api_call.json();  // json method efficiently converts api data we receive into a readerble form. 

      console.log(data);

    }

    render() {

      return (

        <div>

          <Titles/>

          <Form getWeather = {this.getWeather}/>

          <br/>
          <Weather/>
          

          </div>

      );
    }
}

export default App;


















