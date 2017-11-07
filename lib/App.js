import React, {Component} from 'react';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Search from './Search';
import cleanData from './cleanData';
import Welcome from './Welcome';
import key from '../key.js';
import './styles/App.css';

export default class App extends Component {
  constructor() {
    super ();

    this.state = {
      inputState: '',
      error: false
      
    };
  }

  componentDidMount() {
    this.getData();
  }
  setStateFromLocalStorage() {
    let searchInput = localStorage.getItem("State");
    let spacedSearch = searchInput.split(", ");

    this.setState({inputState: spacedSearch,
      error: false});
    this.getData();
  }
  getData() {
    let searchInput = localStorage.getItem("State");
    let spacedSearch = searchInput.split(", ");
    
    fetch(`https://api.wunderground.com/api/${key}
      /conditions/hourly/forecast10day/q/
      ${spacedSearch[1]}/${spacedSearch[0]}.json`)
    .then(res => res.json())
    .then(data => {

      const apiData = cleanData(data);
      const {currentWeather, sevenHour, tenDay} = apiData;

      this.setState( {currentWeather: currentWeather,
       sevenHour: sevenHour, tenDay: tenDay} );

    })
    .catch(error => this.setState({error: true}));
  }

  render() {

    if (!this.state.error) {

      if (this.state.currentWeather !== undefined) {
        return (
          <div>     
          <Search setLocalStorage={this.setStateFromLocalStorage.bind(this)}/>
          <Current currentWeather = {this.state.currentWeather} />
          <SevenHour seven = {this.state.sevenHour} />
          <TenDay ten = {this.state.tenDay} />
          </div> 
          );

      } else if (!localStorage.State) {
        return (
          <div>
          <Welcome setLocalStorage={this.setStateFromLocalStorage.bind(this)}/>
          </div>
          );     
      }
    } else {
      return (
        <div className= "error-page">
          <Search setLocalStorage={this.setStateFromLocalStorage.bind(this)}/>  
          <div className = "error-message">
            <h1 className= 'error-text'>Oh No!</h1>
          <div className = "error-image">
             <img src='./public/logo-error.png'/>
          </div>

          <p className= 'error-text2'>
            The city or area code you've entered doesn't seem to
            match anything in our files.</p>
           <p className= 'error-text2'> Please try a different city or area code </p>
        </div>
        </div>
        );
    }
    return null;
  }


  }