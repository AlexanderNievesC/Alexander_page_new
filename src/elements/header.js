import React, { useState, useEffect } from 'react';
import { fonts } from '../styles/typography';
import styled from 'styled-components';
import {colors} from '../styles/colors';
import { FaGithub,FaLinkedin } from "react-icons/fa6";

export function TopMenus(){

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        const headerOffset = 100; // Adjust this value based on your header's height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });


    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    

return <TopMenu className={isScrolled ? 'scrolled' : ''}>



<TextArea>



    <Logo onClick={() => scrollToSection('introduction')}>Alexander</Logo>
    {/* <Subelement onClick={() => scrollToSection('experience')}>Experience</Subelement>
    <Subelement onClick={() => scrollToSection('projects')}>Projects</Subelement>
    <Subelement onClick={() => scrollToSection('contacts')}>Contact</Subelement> */}

    <Menu>
        <Subelement onClick={() => scrollToSection('experience')}>Experience</Subelement>
        <Subelement onClick={() => scrollToSection('projects')}>Projects</Subelement>
        <Subelement onClick={() => scrollToSection('contacts')}>Contact</Subelement>
      </Menu>
    
</TextArea>

<ButtonZone>
    <Icons>
        <a href="https://github.com/AlexanderNievesC" target="_blank" rel="noopener noreferrer" ><FaGithub  style={{color:'white',width:'25px',height:'25px'}}/></a>
        <a href="https://www.linkedin.com/in/alexander-nieves-4a9520327/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{color:'white',width:'25px',height:'25px'}}/></a>
        
    </Icons> 
    {/* <Button>Login</Button> */}
    {/* <Button>Sign up</Button> */}

    <HamburgerButton onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>

      

      <MobileMenu isOpen={isOpen}>
        <Subelement onClick={() => scrollToSection('experience')}>Experience</Subelement>
        <Subelement onClick={() => scrollToSection('projects')}>Projects</Subelement>
        <Subelement onClick={() => scrollToSection('contacts')}>Contact</Subelement>
      </MobileMenu>

</ButtonZone> 
</TopMenu>

}

const TopMenu = styled.div`
    display:flex;
    position:fixed;
    flex-direction: row;
    gap:30px;
    padding:20px;  
    width:100%;
    height:100px;
    align-content:center;
    justify-content: space-between;
    align-content:center;
    align-items:center;
    background-color:transparent;
    font-family:${fonts.primary};
    z-index: 9999;

    /* Initially, no shadow */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    /* Add shadow when the user scrolls */
    &.scrolled {
    background-color: ${colors.purple[10]};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 370px) {
    padding:10px;
    gap:10px;
    }
`

const Logo = styled.div`
    font-family:${fonts.primary};
    font-weight:700;
    font-size:30px;
    color:white;
    padding:20px;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
    cursor:pointer;


    @media (min-width: 370px) {
    padding:10px;
    }
`

const Subelement = styled.div`
    padding-top:5px;
    position: relative;
    background-color: transparent;
    font-weight: bold;
    color: white;
    height: 40px;
    overflow: hidden; 
    cursor:pointer;
    
    /* The pseudo-element for the bold line */
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px; /* Thickness of the bold line */
        background-color: white;
        transform: translateX(-100%); /* Initially hidden */
        transition: transform 0.5s ease-in-out; /* Duration of the animation */
    }

    &:hover::before {
        transform: translateX(0); /* Move to full width on hover */
    }
`

const Button = styled.button`
    border:black;
    font-family:${fonts.primary};
    font-weight:bold;
    border-radius:30px;
    color:white;
    background-color:${colors.turqiouse[20]};
    width:90px;
    height:35px;
    font-size:14px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover{
        background-color:${colors.turqiouse[10]};
        color:white;
        text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
        font-weight:bold;
    }
`

const ButtonZone = styled.div`    
    display:flex;
    flex-direction:row;
    justify-content:center;
    justify-items:center;
    align-content:center;
    align-items:center;
    gap:30px;
    padding:20px;
`

const SubeleArea= styled.div `
    display:flex;
    flex-direction:row;
    gap:5px;
    justify-items:center;
    align-items:center;
`

const TextArea= styled.div`
    display: flex;
    flex-direction:row;
    gap:30px;
    justify-content:center;
    text-align:center;
    text-align:center;
    align-content:center;
    align-items:center;
    border-radius:1px solid red;
    height:85px;
    
`

const Icons= styled.div`
    display:flex;
    flex-direction:row;

    gap:20px;
    align-items:center;
    justify-content:center;
`

const HamburgerButton = styled.div`
  display: none; /* Oculto por defecto */
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 4px;
    transition: 0.3s;
  }

  /* Mostrar el botón en pantallas pequeñas */
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 20px;

  /* Ocultar el menú en pantallas pequeñas */
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.nav`
  display: none;
  flex-direction: column;
  background-color: ${colors.purple[20]};
  position: absolute;
  top: 80px;
  right: 40px;
  width: 140px;
  padding: 20px;
  border-radius: 10px;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

  /* Mostrar el menú en pantallas pequeñas cuando esté activo */
  ${(props) => props.isOpen && `
    display: flex;
  `}
`;