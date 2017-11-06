import React from 'react';
import Card from './Card.js';
import './styles/SevenHour.css'

const SevenHour = (props) => {
return (
  <div>
  <div className = "seven-hed">
      <h2> Later today </h2>
  </div>
  <div className = "seven-hour">
    
    
    {
      props.seven.map((card, index) => {
        return (
          <Card time = {card.time}
                cond = {card.cond}
                temp = {card.temp}
                img = {card.img} />
          )
      })

    }
  
  </div>
  </div>
  )
}

export default SevenHour;