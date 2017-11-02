function cleanData (data) {
  
  const newWeatherData = data;
  const city = data.current_observation.display_location.full;
  const avgTemp = data.current_observation.temp_f;
  const img = data.current_observation.icon_url;
  const summary = data.current_observation.weather;
  const dateWeekDay = data.forecast.simpleforecast.forecastday[0].date.weekday;
  const dateMonth = data.forecast.simpleforecast.forecastday[0].date.monthname_short;
  const dateDay = data.forecast.simpleforecast.forecastday[0].date.day;
  const highTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  const lowTemp = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  }
  
  export default WeatherData;