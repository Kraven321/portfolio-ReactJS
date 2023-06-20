import React from 'react'
import styled from 'styled-components'

export const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 183px;
    padding-right: 443px;
    padding-left: 97px;
    flex-wrap: wrap;
    

    h1{
        font-weight: 800;
        font-size: 100px;
        line-height: 116px;
        color: #F7F197;
        width: 100%;
    max-width: 900px;
    }
    p{
        font-weight: 400;
        font-size: 24px;
        line-height: 44px;
        color: #03045E;
        width: 100%;
    max-width: 900px;

    }
`
export const WorkImage = styled.div`
    display: flex;
    align-items: center;
    gap: 120px;
    padding-top: 124px;
    padding-right: 103px;
    padding-left: 97px;
    justify-content: center;
    flex-wrap: wrap;

    .square{
        width: 560px;
        height: 400px;
        background-color: yellow;
    }
`

const SectionTree = () => {
  return (
    <>
   <WorkContainer>
    <h1>Work.</h1>
    <p>Confira abaixo, alguns dos meus trabalhos pessoais que desenvolvi para por em prática meus conhecimentos em desenvolvimento Front-End.</p>
   </WorkContainer>
   <WorkImage>
      <div className='square'></div>
      <div className='square'></div>
      </WorkImage>
   </>
  )
}

export default SectionTree
