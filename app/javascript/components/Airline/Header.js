import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:30px;
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`
const TotalReviews = styled.div`
   font-size: 18px;
   padding: 10px 0;
`

const TotalOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`

const Header = (props) => {
  const { image_url, name, avg_score, reviews } = props.attributes
  const total = props.reviews.length

    return(
        <Wrapper>
          <h1><img src={image_url} alt={name} /> {name}</h1>
          <TotalReviews >{total} User Reviews </TotalReviews >
          <div className='starRatings'></div>
          <TotalOutOf>{avg_score}3 ou of 5</TotalOutOf>
        </Wrapper>
    )

}

export default Header;