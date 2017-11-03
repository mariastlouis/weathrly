import React from 'react';
import './styles/Card.css'

export default function Card(props) {
  return (
   
      <div className = "card">
        <div className = "time">
          {props.time}
        </div>
        
         <div className = "temp">
          {props.temp ? props.temp : `${props.high}/${props.low}`}
        </div> 
        <div className = "card-img">

          <img src = {props.img} className = "card-icon" />
        </div>
       

        <div className = "cond">
          {props.cond}
        </div>
      </div>
      
    
    )
}

