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
    
    fetch(`https://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/q/${spacedSearch[1]}/${spacedSearch[0]}.json`)
      .then(res => res.json())
      .then(data => {

        const apiData = cleanData(data);
        const {currentWeather, sevenHour, tenDay} = apiData;

        this.setState( {currentWeather: currentWeather, sevenHour: sevenHour, tenDay: tenDay} );

    })
      .catch(error => this.setState({error: true}));
      }
      
      render() {
        console.log(this.state);

        if(!this.state.error) {
        
        if (this.state.currentWeather !== undefined) {
          return (
            <div>     
              <Search setLocalStorage={this.setStateFromLocalStorage.bind(this)}/>
              <Current currentWeather = {this.state.currentWeather} />
              <SevenHour seven = {this.state.sevenHour} />
              <TenDay ten = {this.state.tenDay} />
            </div> 
          );
        }
        else if (!localStorage.State) {
          console.log('render welcome');
          return (
            <div>
                <Welcome setLocalStorage={this.setStateFromLocalStorage.bind(this)}/>
            </div>
          );     
        }
      } else {
        return(
          <div className= "error-page">
            <Search setLocalStorage={this.setStateFromLocalStorage.bind(this)}/> 
            <h1 className= 'error-text'>ERROR!</h1>
            <h2 className= 'error-text2'>The city or area code you've entered doesn't seem to match anything in our files. Please try a different city or area code. </h2>
             
          </div>
        );
      }
          return null;
      }


}