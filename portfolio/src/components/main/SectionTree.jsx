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
        width: 500px;
        height: 400px;
        background: url(../../../public/images/screen-nike.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: 12px solid yellow;
    }
    .square2{
        width: 500px;
        height: 400px;
        background: url(../../../public/images/screen-ps5.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border: 12px solid yellow;
    }

    .content-img{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h3{
            margin-top: 44px;
            color: #03045E;
            font-weight: 600;
            font-size: 24px;
            line-height: 44px;
            width: 215px;
            max-width: 100%;
        }

        p{
            margin-top: 2px;
            color: #03045E;
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            width: 500px;
            max-width: 100%;
        }
    }
    
`

const SectionTree = () => {
  return (
    <>
   <WorkContainer >
    <h1>Work.</h1>
    <p>Confira abaixo, alguns dos meus trabalhos pessoais que desenvolvi para por em prática meus conhecimentos em desenvolvimento Front-End.</p>
   </WorkContainer>
   <WorkImage>
    <div className="content-img">
      <div className='square'></div>
      <h3>NIKE ANIMATION</h3>
      <p>Animação feita com CSS puro, utilizando @keyframes. Projeto ficou muito parecido com uma propraganda de televisão!</p>
      </div>
      <div className="content-img">
      <div className='square2'></div>
      <h3>PS5 PAGE</h3>
      <p>Projeto no qual tive a oportunidade de treinar HTML e CSS, e aprender mais sobre "Position Absolute" e "Position Relative" que está muito presente nessa aplicação.</p>
      </div>
      </WorkImage>
   </>
  )
}

export default SectionTree
