import React from 'react';
import Card from './Card.js';
import './styles/SevenHour.css';
import PropTypes from 'prop-types';

const SevenHour = (props) => {
return (
  <div className = "seven-wrapper">
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
                img = {card.img} 
                key = {index}/>
          );
      })
    }
    </div>
  </div>
  );
};

export default SevenHour;

SevenHour.propTypes = {
  seven: PropTypes.func
};