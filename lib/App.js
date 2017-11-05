import React, { Component} from 'react';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js'
import testData from './testData.js';
import Search from './Search';
import cleanData from './cleanData';
import Welcome from './Welcome'
import key from '../key.js'



export default class App extends Component{
  constructor(){
    super ();

    this.state = {
      inputState: localStorage.State,
      error: false
      
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
    
    fetch(`https://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${spacedSearch[1]}/${spacedSearch[0]}.json`)
      .then(res => res.json())
      .then(data => {

      const apiData = cleanData(data)
      const {currentWeather, sevenHour, tenDay} = apiData;
      this.setState({currentWeather: currentWeather, sevenHour: sevenHour, tenDay: tenDay})

    })
      .catch(error => this.state.error = true)
      }
      
      render() {
        console.log(this.state);


        if (this.state.currentWeather !== undefined) {
          console.log('render everything')
          console.log(this.state.currentWeather)
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
          return null
      }


}