import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff
`
const AirlineLogo = styled.div`

`
const AirlineName = styled.div`

`
const LinkWrapper = styled.div`

`


const Airline = (props) => {
 return (
     <Card>
        <div className='airline-logo'>
          <img src={props.attributes.image_url} alt={props.attributes.name}/>
        </div>
        <div className='airline-name'>{props.attributes.name}</div>
        <div className='airline-score'>{props.attributes.avg_score}</div>
        <div className='airline-link'>
          <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
        </div>
     </Card>
 )
}

export default Airline;