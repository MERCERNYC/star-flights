import axios from 'axios';
import React, { useState, useEffect} from 'react';


const Airlines = () => {
  const [airlines, setAirlines] = useState ([]);

  useEffect(() => {
    axios.get ('/api/v1/airlines.json')
    .then(resp => console.log(resp))
    .catch(resp => console.log(resp))
  }, [airlines.length])


  return (
     <div> This is Airlines#Index view for our app.</div>
  )
};

export default  Airlines;
