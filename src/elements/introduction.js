import React from 'react';
import { fonts } from '../styles/typography';
import { colors } from '../styles/colors';
import styled from 'styled-components';
import lines from '../assets/lines.svg';


const iconStyle = {
    color: 'white',
    fontSize: '2rem',
    margin: '0.5rem',
    opacity: '0.5'
};

export function Introduction () {
    return (
        <div>
            <Main>
                <Intro>
                    <Title>Hi, I'm Alexander</Title>
                    <Subtitle>I develop full-stack web applications</Subtitle>
                    <a href={`${process.env.PUBLIC_URL}/cv_alexander_nieves.pdf`} download="Alexander_Nieves_CV.pdf">
                        <Button>Get my CV</Button> 
                    </a>
                </Intro>
                <img src={lines} style={{width:'100%', opacity:'0.8'}} alt="Background Lines"/> 
            </Main>
        </div>
    );
}

const Title = styled.div`
    font-family: ${fonts.primary};
    font-size: 70px;
    font-weight: 700;
    color: white;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.div`
    color: white;
    font-size: 17px;
    font-weight: bold;
    font-family: ${fonts.primary};
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.purple[10]};
    background-size: cover;
    background-position: center;
    padding-top:200px;
    height: 400px; /* Full viewport height */
    width: 100%; /* Full width */
    text-align: center;
`;

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    position:absolute;
    gap: 20px;
    color: white;
    font-family: ${fonts.primary};
    font-weight: bold;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1; /* Ensure it appears above other content */
`;

const Button = styled.button`
    border: black;
    font-family: ${fonts.primary};
    font-weight: bold;
    border-radius: 10px;
    color: white;
    background-color: ${colors.turqiouse[20]};
    width: 110px;
    height: 50px;
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        color: white;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        cursor:pointer;
    }
`;
