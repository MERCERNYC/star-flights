import axios from 'axios';
import React, { useState, useEffect, Fragment} from 'react';
import Airline from './Airline'


const Airlines = () => {
  
  //declare state variable airlines
  const [airlines, setAirlines] = useState ([]);

  useEffect(() => {
    axios.get ('/api/v1/airlines.json')
    .then(resp => {
      setAirlines(resp.data.data)
    })
    .catch(resp => console.log(resp))
  }, [airlines.length])

  const grid = airlines.map (item => {
    return (
      <Airline 
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    <div className='home'>
       <div className='header'>
          <h1>Start Flights</h1>
        <div className='subheader'>Honest, unbised airline reviews.</div>
       </div>
       <div className='grid'>   
          {grid}
       </div>
    </div>  
  )
};

export default  Airlines;
