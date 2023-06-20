import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const TagHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 103px 34px 97px;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(251, 248, 204, 0.7)' : '#FBF8CC')};
  transition: background-color 0.5s ease-in-out;

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: #03045e;
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 3.75rem;
  }

  nav ul li a {
    color: #03045e;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    transition: all .3s ease;
  }
nav ul li a::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width .3s;
}
nav ul li a:hover::after{
    width: 100%;

}
  nav ul li a:hover {
    color: black;
  }

  .socials {
    display: flex;
    gap: 1rem;
  }

  .socials .medias {
    color: #03045e;
    width: 26px;
    height: 20px;
    transition: all .3s ease;
  }
  .socials .medias:hover {
    color: black;
  }
  .socials a::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width .3s;
  }
  .socials a:hover::after{
    width: 100%;
  }
`;

const scrolledStyle = {
  backgroundColor: '#F0F4F8', // Tom de gelo
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Suavidade
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TagHeader style={scrolled ? scrolledStyle : {}} scrolled={scrolled}>
      <h2>Henrique Reis</h2>
      <nav>
        <ul>
          <li>
            <a href="%#">Home</a>
          </li>
          <li>
            <a href="%#">About</a>
          </li>
          <li>
            <a href="%#">Work</a>
          </li>
          <li>
            <a href="%#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="socials">
        <a href="#">
          <BsLinkedin className="medias" />
        </a>
        <a href="#">
          <BsGithub className="medias" />
        </a>
        <a href="#">
          <BsInstagram className="medias" />
        </a>
      </div>
    </TagHeader>
  );
};
