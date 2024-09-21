import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/typography';
import { FaBug, FaRegCalendarCheck } from 'react-icons/fa'
import { LuSchool } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export function Experience() {

    return (
    <Main id="experience">
      <Titles>Experience and  Education</Titles>
        
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - 2015"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<LuSchool />}
        >
          <h3 className="vertical-timeline-element-title">Mining Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Arequipa,PE</h4>
          <p>
            Universidad Nacional de San Agustin
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">Arequipa, PE</h4>
          <p>
            Gobierno Regional de Arequipa
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020-2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<LuSchool />}
        >
          <h3 className="vertical-timeline-element-title">Data Architect</h3>
          <h4 className="vertical-timeline-element-subtitle">Lima, PE</h4>
          <p>
            CIBERTEC
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<LuSchool />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Lima, PE</h4>
          <p>
            CODEABLE
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023-2024"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Software Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">Lima,PE</h4>
          <p>
            MS4M
          </p>
        </VerticalTimelineElement>
  
</VerticalTimeline>

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
    height:1500px;
`

    const Titles= styled.div`
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

  