import React, { Component} from 'react';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js'
import testData from './testData.js';
import Search from './Search';
import cleanData from './cleanData';
import Welcome from './Welcome'



export default class App extends Component{
  constructor(){
    super ();

    this.state = {
      inputState: localStorage.State
    }
  }

  componentDidMount() {
    this.getData()
  }
  setStateFromLocalStorage(){
    let searchInput = localStorage.getItem("State");
    let spacedSearch = searchInput.split(", ")
    this.setState({inputState: spacedSearch})
    this.getData();
  }
    getData() {
    let searchInput = localStorage.getItem("State");
    let spacedSearch = searchInput.split(", ")
    
    fetch(`https://api.wunderground.com/api/41560f9fa5aab6df/conditions/hourly/forecast10day/q/${spacedSearch[1]}/${spacedSearch[0]}.json`)
      .then(res => res.json())
      .then(data => {

      const apiData = cleanData(data)
      const {currentWeather, sevenHour, tenDay} = apiData;
      this.setState({currentWeather: currentWeather, sevenHour: sevenHour, tenDay: tenDay})
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
      
      render() {
        console.log(this.state);
        if (this.state.currentWeather !== undefined) {
          console.log('render everything')
          return (
            <div>     
              <Search setLocalStorage={this.setStateFromLocalStorage.bind(this)}/>
              <Current currentWeather = {this.state.currentWeather} />
              <SevenHour seven = {this.state.sevenHour} />
              <TenDay ten = {this.state.tenDay} />
            </div> 
          )
        }
        else if (!localStorage.State) {
          console.log('render welcome');
          return (
            <div>
                <Welcome setLocalStorage={this.setStateFromLocalStorage.bind(this)}/>
            </div>
          )     
        }
          console.log('render nothing');
          return null;   
      }


}