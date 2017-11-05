import React from 'react';
import Card from './Card.js'
import './styles/current.css'



const Current = (props) => {
  return (
    <div>
      <div className = "current">
        <div className = "condition">
          <div className = "city">
            <h2> {props.currentWeather.city} </h2>
          </div>
          <div className = "current-temp">
            <div className = "big-temp">
              <p> {props.currentWeather.avgTemp}</p>
            </div>
            <div className = "current-img">

             <i className={`current-icon wi wi-wu-${props.currentWeather.img}`}></i>
            </div>
          </div>

          <div className = "current-cond">
              {props.currentWeather.currentCond}
            </div>
        </div>
        <div className = "bottom-info">
          <div className = "date">
            <p> {props.currentWeather.dateWeekDay}, {props.currentWeather.dateMonth} {props.currentWeather.dateDay} </p>
          </div>
          <div className = "high-low">
              <p> High: <span className = "accent-color"> {props.currentWeather.highTemp} </span> Low: <span className = "accent-color"> {props.currentWeather.lowTemp} </span></p>
          </div>
        </div>
        <div className = "summary">
        <p> {props.currentWeather.summary} </p>
        </div>
      </div>
    </div>
          
            
            
         
  )
}




export default Current;