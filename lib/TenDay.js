import React from 'react';
import Card from './Card.js'
import './styles/TenDay.css'


const TenDay = (props) => {

  return (
    <div className = "ten-day"> 
      <div className ="ten-hed"><h2> Upcoming Forecast </h2> </div>
      <div className = 'ten-weekday'>
      <div className = 'ten-day-table'> 
      
          {
      props.ten.map((card, index) => {
        return (
          <Card time = {card.day}
                cond = {card.dayCond}
                img = {card.dayImg}
                high = {card.dayHigh}
                low = {card.dayLow} 
                key = {index} />
          )
      })

    }
      </div>
      </div>
      
      
    </div>
    )

}

export default TenDay;