import React from 'react'
import styled from 'styled-components'

export const SectionContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: flex-start;
  justify-content: center;
  padding-top: 124px;
  padding-right: 204px;
  padding-left: 97px;
  padding-bottom: 83px;
  width: 1139px;
  max-width: 100%;

  h1{
    color: #F7F197;
    font-weight: 800;
    font-size: 100px;
    line-height: 116px;
  }
  .square{
    background-color: yellow;
    width: 400px;
    height: 300px;
  }
  .wrapper{
    display: flex;
    justify-content: space-evenly;
    gap: 59px;
  }
  .paragrafo{
    display: flex;
    flex-direction: column;
    margin-left: 100px;
  }
  p{
    color: #03045E;
    font-weight: 400;
    font-size: 24px;
    line-height: 44px;
    width: 640px;
    max-width: 100%;
    margin-bottom: 20px;
  }
  a{
    color: #03045E;
    font-weight: 400;
    font-size: 24px;
    line-height: 44px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`

export const SectionFour = () => {
  return (
    <SectionContact>
      <h1>Contact.</h1>
      <div className="wrapper">
        <div className='square'></div>
        <div className="paragrafo">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</p>
          <a href="#">github.com/Kraven321</a>
          <a href="#">instagram.com/henriquereissz</a>
          <a href="#">linkedin.com/henriquereis</a>
        </div>
      </div>
        </SectionContact>
  )
}
