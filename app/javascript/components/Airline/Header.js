import React from 'react';

const Header = (props) => {
  const { image_url, name, avg_score, reviews } = props.attributes
  const total = props.reviews.length

    return(
        <div className='wrapper'>
          <h1><img src={image_url} alt={name} /> {name}</h1>
          <div className='totalReviews'>{total} User Reviews </div>
          <div className='starRatings'></div>
          <div className='totalOutOf'>3 ou of 5</div>
        </div>
    )

}

export default Header;