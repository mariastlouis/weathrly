import React from 'react';
import './styles/current.css';
import PropTypes from 'prop-types';

const Current = (props) => {
  return (
    <div>
      <div className = "current">
        <div className = "condition">
          <div className = "current-img">
            <i className={`current-icon 
              wi wi-wu-${props.currentWeather.img}`}></i>
          </div>
        </div>
        <div className = "date-city">
          <div className = "city">
            <p> {props.currentWeather.city} </p>
          </div>
          <div className = "current-temp">
            <h1> {props.currentWeather.avgTemp}&deg;</h1>

          </div>
          <div className = "date">
          {//eslint-disable-next-line max-len
            <p> {props.currentWeather.dateWeekDay}, {props.currentWeather.dateMonth} {props.currentWeather.dateDay} </p> 
          }    
          
          </div>
        </div>
        <div className = "summary-high-low">
          <div className = "current-cond">
            <p>{props.currentWeather.currentCond}</p>
          </div>
          <div className = "high-low">
            <p> High: {props.currentWeather.highTemp}&deg;|
             Low: {props.currentWeather.lowTemp}&deg;</p>
          </div>
        </div>
        <div className = "summary">
          <p> {props.currentWeather.summary} </p>
        </div>   
    </div>
  </div>       
  );
};

export default Current;


Current.propTypes = {

  currentWeather: PropTypes.object
};

