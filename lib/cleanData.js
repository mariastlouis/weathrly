function cleanData(data) {
  const currentWeather = {
      city: data.current_observation.display_location.full,
      avgTemp: data.current_observation.temp_f,
      img:data.current_observation.icon_url,
      summary: data.current_observation.weather,
      dateWeekDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
      dateMonth: data.forecast.simpleforecast.forecastday[0].date.monthname_short,
      dateDay: data.forecast.simpleforecast.forecastday[0].date.day,
      highTemp: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      lowTemp: data.forecast.simpleforecast.forecastday[0].low.fahrenheit
  }


  const sevenHour = data.hourly_forecast.slice(0, 7).reduce((sevenHourArray, hour) => {
    sevenHourArray.push({time: hour.FCTTIME.civil, temp: hour.temp.english, cond: hour.condition, img: hour.icon_url})
    return sevenHourArray
  }, [])


  return {currentWeather, sevenHour} 
}




 
  ////////////  CURRENT WEATHER  /////////////
  // let timeDay = data.current_observation.observation_time.split('');
  // timeDay = timeDay.slice(16, timeDay.length).join('');

  // let weatherSummary = data.forecast.txt_forecast.forecastday['0'].fcttext;
  //   weatherSummary = weatherSummary.split('')
  //   for (let i = 0; i < weatherSummary.length; i++) {
  //     if (weatherSummary[i] === 'H') {
  //       weatherSummary.splice(i, 10);
  //       break;
  //     }
  //   }
  //   weatherSummary = weatherSummary.join('')

  // let todayHigh = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  // let todayLow = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  // let todayHighLow = ('High ' + todayHigh + 'F. Low ' + todayLow + 'F');

  // const currentWeather = {
  //   cityState: data.current_observation.display_location.full,
  //   timeDay: timeDay,
  //   weatherSummary: weatherSummary,
  //   todayHighLow: todayHighLow
  // }

  ////////////  7 HOUR  /////////////
//   const sevenHour = data.hourly_forecast.slice(0, 7).reduce((sevenHourArray, hour) => {
//     sevenHourArray.push({time: hour.FCTTIME.civil, temp: hour.temp.english, cond: hour.condition})
//     sevenHourArray[0].time = 'NOW'
//     sevenHourArray[0].temp = data.current_observation.temp_f;
//     return sevenHourArray
//   }, [])

//   ////////////  10  DAY  /////////////
//   const tenDay = data.forecast.simpleforecast.forecastday.reduce((tenDayArray, day) => {
//     tenDayArray.push({dayHigh: day.high.fahrenheit, dayLow: day.low.fahrenheit, day: day.date.weekday, dayCond: day.conditions})
//     tenDayArray[0].day = 'TODAY';
//     return tenDayArray
//   }, [])

//   return {currentWeather, sevenHour, tenDay}  //obj, arr of hours, arr of days
// }

export default cleanData;