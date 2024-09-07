import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/typography';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'

import { IoSchoolOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";

export function Experience() {
    return (
    <Main>
        <Title>Experience and  Education</Title>
        
        
        <Timeline minEvents={5} placeholder>
            <TimelineEvent
                color='#9c2919'
                icon={IoSchoolOutline}
                title={<TitleElement>Mining Engineer</TitleElement>}
                subtitle={<TitleElement>2011-2015</TitleElement>}
            />
            <TimelineEvent
                color='#87a2c7'
                icon={MdWork }
                title={<TitleElement>Analyst</TitleElement>}
                subtitle={<TitleElement>2017-2018</TitleElement>}
            />
            <TimelineEvent
                color='#9c2919'
                icon={IoSchoolOutline}
                title={<TitleElement>Data Architect</TitleElement>}
                subtitle={<TitleElement>2020-2023</TitleElement>}
                // action={{
                // label: 'Ver detalhes...',
                // onClick: () => window.alert('Erro!')
                // }}
            />
            <TimelineEvent
                color='#9c2919'
                icon={IoSchoolOutline}
                title={<TitleElement>Full Stack Developer</TitleElement>}
                subtitle={<TitleElement>2023</TitleElement>}
                // action={{
                // label: 'Ver detalhes...',
                // onClick: () => window.alert('Erro!')
                // }}
            />
            <TimelineEvent
                color='#87a2c7'
                icon={MdWork}
                title={<TitleElement>Software Analyst</TitleElement>}
                subtitle={<TitleElement>2024</TitleElement>}
            />
        </Timeline>

        </Main>  
    );
}

const Main = styled.div`
    display:flex;
    flex-direction: column;
    gap:40px;
    align-content:center;
    align-items:center;
    justify-content: center;
    background-color: ${colors.purple[10]};
    padding-top:50px;
    height:700px;
`

    const Title= styled.div`
    font-family:${fonts.primary};
    font-weight:700;
    font-size:30px;
    color:white;
    padding:20px;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
    `

    const TitleElement= styled.div`
    transition: transform 0.3s ease;
    font-family:${fonts.primary};
    font-size:15px;
    color:white;

    &:hover{
        transform: scale(1.1); 
    }
    `

  