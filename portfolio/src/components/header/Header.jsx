import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsGithub, BsInstagram, BsList } from 'react-icons/bs';
import { links } from '../../data';

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
    transition: all 0.3s ease;
    position: relative;
  }

  nav ul li a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  nav ul li a:hover::after {
    width: 100%;
  }

  nav ul li a:hover {
    color: black;
  }

  nav ul li.selected.active a::after {
    width: 100%;
  }

  nav ul li.selected.active a,
  nav ul li.selected.active a:hover {
    color: black;
    width: 100%;
  }

  .socials {
    display: flex;
    gap: 1rem;
  }

  .socials .medias {
    color: #03045e;
    width: 26px;
    height: 20px;
    transition: all 0.3s ease;
  }

  .socials .medias:hover {
    color: black;
  }

  .socials a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
  }

  .socials a:hover::after {
    width: 100%;
  }

  .menu-icon{
    display: none;
  }
  @media screen and (max-width: 500px) {
    .menu-icon{
    display: flex;
  }
  nav ul {
    display: none;
  }
    
  }

`;

const MobileMenu = styled.div`
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(251, 248, 204, 0.7)' : '#FBF8CC')};
  transition: background-color 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 20px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    position: relative;
  }

  li a {
    color: #03045e;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    transition: all 0.3s ease;
  }

  li a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  li a:hover::after {
    width: 100%;
  }

  li a:hover {
    color: black;
  }
`;

const scrolledStyle = {
  backgroundColor: '#F0F4F8',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedLink, setSelectedLink] = useState(1);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      setSelectedLink(getActiveLinkId(scrollPosition));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getActiveLinkId = (scrollPosition) => {
    let activeLinkId = null;
    const scrollMargin = 70;
    for (const link of links) {
      const targetElement = document.querySelector(link.url);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const targetHeight = targetElement.offsetHeight;
        if (
          scrollPosition >= targetPosition + scrollMargin &&
          scrollPosition < targetPosition + targetHeight
        ) {
          activeLinkId = link.id;
          break;
        }
      }
    }
    return activeLinkId;
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  return (
    <TagHeader style={scrolled ? scrolledStyle : {}} scrolled={scrolled.toString()}>
      <h2>Henrique Reis</h2>

      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id} className={`${link.id === selectedLink ? 'selected active' : ''}`}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="socials">
        <a href="https://www.linkedin.com/in/henrique-reis-b1a2a520b/" target="_blank">
          <BsLinkedin className="medias" />
        </a>
        <a href="https://github.com/Kraven321" target="_blank">
          <BsGithub className="medias" />
        </a>
        <a href="https://www.instagram.com/henriquereissz/" target="_blank">
          <BsInstagram className="medias" />
        </a>
      </div>

      <BsList className="menu-icon" onClick={toggleMobileMenu} />

      {showMobileMenu && (
        <MobileMenu scrolled={scrolled.toString()}>
          <ul>
            {links.map((link) => (
              <li key={link.id} className={`${link.id === selectedLink ? 'selected active' : ''}`}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </MobileMenu>
      )}
    </TagHeader>
  );
};

export default Header;
