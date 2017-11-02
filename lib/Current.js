import React from 'react';
import Card from './Card.js'
import './styles/current.css'
import Search from './Search';


const Current = (props) => {
  return (
    <div>
      <div className = "current">
        <Search />
        <div className = "condition">
          <div className = "city">
            <h2> {props.currentWeather.city} </h2>
          </div>
          <div className = "current-temp">
            <div className = "big-temp">
              <p> {props.currentWeather.avgTemp}</p>
            </div>
            <div className = "current-img">
              <img src = {props.currentWeather.img} className = "current-icon" />
            </div>
          </div>

          <div className = "summary-text">
              <p> {props.currentWeather.summary} </p>
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
      </div>
    </div>
          
            
            
         
  )
}




export default Current;