import React from 'react'
import styled from 'styled-components'

export const SectionContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-top: 272px;
    padding-right: 443px;
    padding-left: 97px;
    

    h1{
        color: #F7F197;
        font-weight: 800;
        font-size: 100px;
        line-height: 116px;
    }

    p{
        font-weight: 400;
        font-size: 24px;
        line-height: 44px;
        color: #03045E;
        width: 1200px;
        max-width: 100%;
    }
`
export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 145px;
    padding-right: 156px;
    padding-left: 353px;
    align-items: center;
    justify-content: center;
    
    
    ul{
        display: flex;
        flex-direction: column;
        gap: 80px;
    }

    li{
        color: #03045E;
        font-weight: 600;
        font-size: 24px;
        line-height: 40px;
    }
    p{
        font-weight: 400;
        font-size: 24px;
        line-height: 44px;
        color: #03045E;
        width: 900px;
        max-width: 100%;
    }
    
`

const SectionTwo = () => {
  return (
    <>
 <SectionContainer>
    <h1>About.</h1>
    <p>
   Meu nome é Henrique Reis, atualmente trabalho no Fundo de Previdência Social dos Servidores Públicos - FUNPREV.
   Sou estudante de Programção e curso Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá.
   Apaixonado por Desenvolvimento Front-End, é o que eu quero ser futuramente!
    </p>
   
 </SectionContainer>
  <DateContainer>
  <ul>
      <li>2017 - 2018
          <p>
          Trabalhei como caixa de SuperMercado em São Paulo, mais precisamente na Rede de Mercados "Esquinão".
         </p>
      </li>
      <li>2018 - 2020
          <p>
          Trablahei como Jovem Aprendiz no Setor de Suprimentos de uma Multinacional Chamada "Sansuy", uma Fábrica que fazia lona para caminhões e piscinas.
           </p>
      </li>
      <li>2022 - present
          <p>Atualmente Trabalho no Fundo de Previdência Social dos Servidores Públicos - FUNPREV/SE, onde sou assessor técnico no Orgão.
          </p>
      </li>
  </ul>
  </DateContainer>
  </>
 
 
  )
}

export default SectionTwo
