import React from 'react';
import Card from './Card.js'
import './styles/TenDay.css'


const TenDay = (props) => {

  return (
    <div className = "ten-day"> 
      <div className = 'ten-weekday'>
      
          {
      props.ten.map((card, index) => {
        return (
          <Card time = {card.day}
                cond = {card.dayCond}
                img = {card.dayImg}
                high = {card.dayHigh}
                low = {card.dayLow} />
          )
      })

    }

      </div>
      
      
    </div>
    )

}

export default TenDay;