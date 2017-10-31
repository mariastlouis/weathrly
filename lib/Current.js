import React from 'react';
import Card from './Card.js'
import './styles/current.css'

const Current = (props) => {
  return (
    <div>
      <div className = "current">
        <div className = "search">
          <input type = "text" placeholder="Search for another city"/>
          <button type = "submit" > Submit </button>
        </div>
        <div className = "condition">
          <div className = "city">
            <h2> {props.city} </h2>
          </div>
          <div className = "current-temp">
            <div className = "big-temp">
              <p> {props.avgTemp}</p>
            </div>
            <div className = "current-img">
              <img src = "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif" className = "current-icon" />
            </div>
          </div>

          <div className = "summary-text">
              <p> Partly Cloudy </p>
            </div>
        </div>
        <div className = "bottom-info">
          <div className = "date">
            <p> Monday </p>
          </div>
          <div className = "high-low">
              <p> High: <span className = "accent-color"> 55 </span> Low: <span className = "accent-color"> 35 </span></p>
          </div>
        </div>
      </div>
    </div>
          
            
            
         
  )
}

export default Current;