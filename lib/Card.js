import React from 'react';
import './styles/Card.css'

export default function Card(props) {
  return (
   
      <div className = "card">
        <div className = "time">
          {props.time}
        </div>
        
         
        <div className = "card-img">

        <i className={`card-icon wi wi-wu-${props.img}`}></i>

        </div>
      

        <div className = "temp">
          {props.temp ? props.temp : `${props.high}/${props.low}`}&deg;
        </div> 

         <div className = "cond">
          {props.cond}
        </div>
      </div>
      
    
    )
}

