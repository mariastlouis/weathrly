import React, { Component} from 'react';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import testData from './testData.js';
import Search from './Search.js';

export default class App extends Component{
  constructor(){
    super ();

    this.state = {
    inputState: '',
    weatherData: null
    }
  }
  componentDidMount() {
    this.setStateFromLocalStorage()
    this.getData()
  }
  setStateFromLocalStorage(){
    let searchInput = localStorage.getItem("State");
    let spacedSearch = searchInput.split(", ")
    this.setState({inputState: spacedSearch})
  }
    getData() {
    fetch(`https://api.wunderground.com/api/41560f9fa5aab6df/conditions/hourly/forecast10day/q/CO/Denver.json`)
      .then(res => res.json())
      .then(data => {

        const cleanData = {
          current: {        
          city: data.current_observation.display_location.full,
          avgTemp: data.current_observation.temp_f,
           img:data.current_observation.icon_url,
           summary: data.current_observation.weather,
           dateWeekDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
           dateMonth: data.forecast.simpleforecast.forecastday[0].date.monthname_short,
           dateDay: data.forecast.simpleforecast.forecastday[0].date.day,
           highTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
           lowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit
          },
          seven: data.hourly_forecast.slice(0, 7) 
          }
        this.setState({weatherData: cleanData});
        console.log(this.state.weatherData.current.city)
        })
      // .catch( (error) => console.log('Error retreiving trivia: ', error) )
      }
      
render(){

if (this.state.weatherData) {
 let {city, avgTemp, img, summary, dateWeekDay, dateMonth, dateDay, highTemp, lowTemp} = this.state.weatherData.current;
  let {hour, day} = this.state.weatherData.seven;
  return (
     
    <div> 
      <Search />
      <Current city = {city}
                avgTemp = {avgTemp}
                img = {img}
                summary = {summary}
                dateWeekDay = {dateWeekDay}
                dateMonth = {dateMonth}
                dateDay = {dateDay}
                highTemp = {highTemp}
                lowTemp = {lowTemp} /> 
    </div> 
    )
}
  return null
  }



}