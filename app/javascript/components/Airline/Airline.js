import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display-grid: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`

const Main = styled.div`
  padding-left: 60px;
`


const Airline = (props) => {
  const [ airline, setAirline ] = useState({});
  const [ review, setReviews ] = useState({});
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug

    axios.get(`/api/v1/airlines/${slug}`)
     .then (resp => {
       setAirline(resp.data)
       setLoaded(true)
      })
      .catch(data => console.log('Error', data) )   
  }, [])

  return (
    <Wrapper>
      { 
        loaded &&
        <Fragment>
          <Column>
            <Main>
              <Header 
                attributes={airline.data.attributes}
                reviews={airline.included}
              />

            </Main>
          </Column>
          <Column>
            {/* <ReviewForm
              // name={airline.data.attributes.name}
              // review={review}
              // handleChange={handleChange}
              // handleSubmit={handleSubmit}
              // setRating={setRating}
              // error={error}
            /> */}
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}
export default  Airline;