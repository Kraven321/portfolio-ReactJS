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
  .square3{
        width: 500px;
        height: 400px;
        background: url(../../../public/images/contact.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: 12px solid yellow;
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
        <div className='square3'></div>
        <div className="paragrafo">
          <p>Para entrar em contato comigo, você pode utilizar os seguintes links:.</p>
          <a href="https://github.com/Kraven321">github.com/Kraven321</a>
          <a href="https://www.instagram.com/henriquereissz/">instagram.com/henriquereissz</a>
          <a href="https://www.linkedin.com/in/henrique-reis-b1a2a520b/">linkedin.com/henriquereis</a>
        </div>
      </div>
    </SectionContact>
  )
}
