import React from 'react';

export default function Card(props) {
  return (
    <div> 
      <div className = "card">

        <p className = "hour"> {props.hourlyTime} </p>
        <p className = "time"> {props.hourlyTemp} </p>
      </div>
      
    </div>
    )
}

 //  { props.hourlyInfo.map((obj, i) => 
   //    <Card 
   //      key = {i}
   //      time= {obj.FCTTIME.civil}
   //      condition = {obj.condition}
   //      img = {obj.icon_url}
   //      temp= {obj.temp.english} /> )
   // }