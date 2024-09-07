import React, { useState, useEffect } from 'react';
import { fonts } from '../styles/typography';
import styled from 'styled-components';
import {colors} from '../styles/colors';
import { FaGithub,FaLinkedin } from "react-icons/fa6";

export function TopMenus(){

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
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

return <TopMenu className={isScrolled ? 'scrolled' : ''}>

<TextArea>
    <Logo onClick={() => scrollToSection('introduction')}>Alexander</Logo>
    <Subelement onClick={() => scrollToSection('experience')}>Experience</Subelement>
    <Subelement onClick={() => scrollToSection('projects')}>Projects</Subelement>
    <Subelement onClick={() => scrollToSection('contacts')}>Contact</Subelement>
</TextArea>

<ButtonZone>
    <Icons>
        <a href="https://github.com/AlexanderNievesC" target="_blank" rel="noopener noreferrer" ><FaGithub  style={{color:'white',width:'25px',height:'25px'}}/></a>
        <a href="https://www.linkedin.com/in/alexander-nieves-4a9520327/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{color:'white',width:'25px',height:'25px'}}/></a>
        
    </Icons> 
    {/* <Button>Login</Button> */}
    {/* <Button>Sign up</Button> */}


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
  box-shadow: none;

  /* Add shadow when the user scrolls */
  &.scrolled {
    background-color: ${colors.purple[10]};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

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

