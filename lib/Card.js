import React from 'react';
import './styles/Card.css';
import PropTypes from 'prop-types';

export default function Card(props) {
  return (
   
      <div className = "card">
        <table>
          <tbody>
          <tr>
            <td className = "card-time"><strong> {props.time} </strong> </td>

            <td className = "card-img"> <i className={`card-icon wi wi-wu-${props.img}`}></i> </td>
        
            <td className= "card-temp"> {props.temp ? props.temp : `${props.high}/${props.low}`}&deg;</td> 
            
            <td className= "card-condition"> {props.cond}</td> 
       
          </tr>
          </tbody>
          </table>
        
      </div>
      
    
    );
}
        
Card.propTypes = {
  time: PropTypes.string,
  temp: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string,
  img: PropTypes.string,
  cond: PropTypes.string
};