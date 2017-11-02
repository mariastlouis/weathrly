import React, { Component} from 'react';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
// import TenDay from './TenDay.js';
import testData from './testData.js';
import WeatherData from './weatherData';
import Search from './Search';
import cleanData from './cleanData';




export default class App extends Component{
  constructor(){
    super ();

    this.state = {
    currentWeather: {},
    sevenHour: []
    }

  }


  componentDidMount() {
    this.getData()
  }




    getData() {
    fetch(`https://api.wunderground.com/api/41560f9fa5aab6df/conditions/hourly/forecast10day/q/CO/Denver.json`)
      .then(res => res.json())
      .then(data => {
      const apiData = cleanData(data)
      const {currentWeather, sevenHour} = apiData;
      this.setState({currentWeather: currentWeather, sevenHour: sevenHour})
    })
        // const cleanData = {
        //   current: {        
        //   city: data.current_observation.display_location.full,
        //   avgTemp: data.current_observation.temp_f,
        //    img:data.current_observation.icon_url,
        //    summary: data.current_observation.weather,
        //    dateWeekDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
        //    dateMonth: data.forecast.simpleforecast.forecastday[0].date.monthname_short,
        //    dateDay: data.forecast.simpleforecast.forecastday[0].date.day,
        //    highTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        //    lowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit

        //   },
        //   seven: data.hourly_forecast.slice(0, 7)
          
        //   }
   
          
          

        
       
          
      // .catch( (error) => console.log('Error retreiving trivia: ', error) )
      }
      




render(){

if (this.state.currentWeather) {
 
  return (
     
    <div> 
      <Search />

      <Current currentWeather = {this.state.currentWeather} />
     <SevenHour seven = {this.state.sevenHour} />
      
    </div> 
    )
}
  return null
  }



}