import React from 'react'
import styled from 'styled-components'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
export const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 34px 103px 34px 97px;

    h2{
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        color: #03045E;
    }
    nav ul{
        display: flex;
        align-items: center;
        gap: 3.75rem;
    }
    nav ul li a{
        color: #03045E;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;

    }
    .socials{
        display: flex;
        gap: 1rem;
    }
    .socials .medias{
        color: #03045E;
        width: 26px;
        height: 20px;
    }
    
`

export const Header = () => {
  return (
    <TagHeader>
        <h2>Henrique Reis</h2>
        <nav>
            <ul>
                <li><a href="%#">Home</a></li>
                <li><a href="%#">About</a></li>
                <li><a href="%#">Work</a></li>
                <li><a href="%#">Contact</a></li>
            </ul>
        </nav>
        <div className="socials">
            <a href="#"><BsLinkedin className='medias'/></a>
            <a href="#"><BsGithub className='medias'/></a>
            <a href="#"><BsInstagram className='medias'/></a>
        </div>
    </TagHeader>
  )
}
