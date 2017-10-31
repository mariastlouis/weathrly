import React from 'react';
import Current from './Current.js'
import SevenHour from './SevenHour.js'
import TenDay from './TenDay.js'
import testData from './testData.js'




export default function App () {
  return (
    
    <div> 
      <Current city= {testData.current_observation.display_location.full}
                avgTemp= {testData.current_observation.temp_f}/>
      <SevenHour />
      <TenDay />

    </div> 
    )


}