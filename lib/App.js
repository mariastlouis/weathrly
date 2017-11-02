import React, { Component} from 'react';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import testData from './testData.js';
import WeatherData from './weatherData';
import Search from './Search.js';

const cleanData = testData.hourly_forecast.map((hour)=>{
  return{
    highTemp: hour
  }
})






export default class App extends Component{
  constructor(){
    super ();

    this.state = {
    }
  }


  componentWillMount() {
    fetch(`https://api.wunderground.com/api/41560f9fa5aab6df/conditions/hourly/forecast10day/q/CO/Denver.json`)
      .then(res => res.json())
      .then(data => {
        const apiData = cleanData(data)
        
        // const newWeatherData = data;
        // const city = data.current_observation.display_location.full;
        // const avgTemp = data.current_observation.temp_f;
        // const img = data.current_observation.icon_url;
        // const summary = data.current_observation.weather;
        // const dateWeekDay = data.forecast.simpleforecast.forecastday[0].date.weekday;
        // const dateMonth = data.forecast.simpleforecast.forecastday[0].date.monthname_short;
        // const dateDay = data.forecast.simpleforecast.forecastday[0].date.day;
        // const highTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
        // const lowTemp = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;

        this.setState({city, avgTemp, img, summary, dateWeekDay, dateMonth, dateDay, highTemp, lowTemp});

        console.log(data)
      
      })
      .catch(err => render(){
        <div> you can't do that! </div>
      });
  }


render(){
  console.log(this.state.city)
  return (
    
    <div> 
      <Search />
      <Current city = {this.state.city}
                avgTemp = {this.state.avgTemp} 
                img = {this.state.img}    
                summary = {this.state.summary}  
                dateWeekDay = {this.state.dateWeekDay} 
                dateMonth = {this.state.dateMonth}      
                dateDay = {this.state.dateDay} 
                highTemp = {this.state.highTemp}
                lowTemp = {this.state.lowTemp}              />
      <SevenHour />
      <TenDay />

    </div> 
    )
  }


}