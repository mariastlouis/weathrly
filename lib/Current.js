import React from 'react';
import Card from './Card.js'
import './styles/current.css'


const Current = (props) => {
  return (
    <div>
      <div className = "current">
        <div className = "condition">
          <div className = "city">
            <h2> {props.city} </h2>
          </div>
          <div className = "current-temp">
            <div className = "big-temp">
              <p> {props.avgTemp}</p>
            </div>
            <div className = "current-img">
              <img src = {props.img} className = "current-icon" />
            </div>
          </div>

          <div className = "summary-text">
              <p> {props.summary} </p>
            </div>
        </div>
        <div className = "bottom-info">
          <div className = "date">
            <p> {props.dateWeekDay}, {props.dateMonth} {props.dateDay} </p>
          </div>
          <div className = "high-low">
              <p> High: <span className = "accent-color"> {props.highTemp} </span> Low: <span className = "accent-color"> {props.lowTemp} </span></p>
          </div>
        </div>
      </div>
    </div>
          
            
            
         
  )
}


 

export default Current;