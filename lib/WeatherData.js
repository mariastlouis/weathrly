class WeatherData {
    constructor(data) {
      this.city = data.current_observation.display_location.full;
      this.avgTemp = data.current_observation.temp_f;
      
    }
  }
  
  export default WeatherData;