import React, { Component} from 'react';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js'
import testData from './testData.js';
import Search from './Search';
import cleanData from './cleanData';



export default class App extends Component{
  constructor(){
    super ();

    this.state = {

    inputState: ["Denver", "CO"],
    currentWeather: {},
    sevenHour: [],
    tenDay: []

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
  
      }
      
render(){

if (this.state.currentWeather) {
 
  return (
     
    <div> 

      <Search setLocalStorage={this.setStateFromLocalStorage.bind(this)}/>
      <Current currentWeather = {this.state.currentWeather} />
     <SevenHour seven = {this.state.sevenHour} />
     <TenDay ten = {this.state.tenDay} />
      

    </div> 
    )
}
  return null
  }



}