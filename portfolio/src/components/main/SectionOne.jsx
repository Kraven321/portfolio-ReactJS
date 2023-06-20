import React from 'react'
import styled from 'styled-components'

export const TagMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 191px;
    padding-right: 103px;
    padding-left: 97px;
    flex-wrap: wrap;

    .left{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-right: 7.37rem;
    }
    .left h4{
        font-size: 28px;
        line-height: 42px;
        font-weight: 500;
        color: #03045E;
        text-align: left;
    }
    .left .ola{
        padding-right: 180px;
    }
    .left .dev{
        padding-right: 190px;
    }
    .left h1{
        font-weight: 800;
        font-size: 100px;
        line-height: 116px;
        color: #03045E;
    }
    .left .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 37px;
        margin-right: 400px;
    }
    .btn button{
        color: #474306;
        background-color: #F5EE84;
        font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 16px 37px 15px 35px;
  border-radius: 10px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
        font-weight: 600;
    }
    .btn button:after {
  content: "";
  background-color: #F5EE84;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  border-radius: 10px;
  transition: 0.2s;
}

.btn button:hover:after {
  top: 0px;
  left: 0px;
}

    .right{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 4rem;
    }
    .foto{
    height: 400px;
    width: 400px;
    background: url(../../../public/images/Henrique2.jpg);
    border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 15px rgba(0, 0, 0, .2);
    animation: blob 3.7s linear infinite;
    -webkit-box-shadow: 0px 0px 1px 12px #474306; 
box-shadow: 0px 0px 1px 8px #474306;
}
@keyframes blob{
    0%, 100%{
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;;
    }
    33%{
        border-radius: 42% 28% 48% 48% / 28% 28% 72% 72%;;
    }
    66%{
        border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%;;
    }
}
`

export const SectionOne = () => {
  return (
    <TagMain>
        <div className="left">
            <h4 className='ola'>Olá, eu sou o Henrique,</h4>
            <h1>Developer <br /> Front-End</h1>
            <h4 className='dev'>desenvolvedor do Brasil.</h4>
            <div className="btn">
                <button>Resume</button>
            </div>
        </div>
        <div className="right">
          <div className="foto"></div>
        </div>
    </TagMain>
  )
}
