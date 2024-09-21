import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/typography';
import lines from '../assets/lines.svg'
import keepable from '../assets/keepable.png'
import doable from '../assets/doable.png'
import organizable from '../assets/organizable.png'
import gitstat from '../assets/gitstats.png'
import getjob from '../assets/getjob.png'

export function Portfolio() {
    return (
    <Main id="projects">
        <Title>My Projects</Title>

        <ZoneProject>

            <Project href="https://keepable-alex.netlify.app/" alt="keepable" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color:'black'}}>
                <img src={keepable} style={{width:'300px', height:'200px'}}/>

                <div>
                    <Subtitle>Note Manager</Subtitle>
                    <div>Application that allows the user to create,  delete and restore notes</div>
                    <br/>
                    <div>
                        <Tech1>#Javascript</Tech1>
                    </div>
                </div>
                
            </Project>

            <Project href="https://doableapp1alexander.netlify.app/" alt="keepable" target="_blank"  rel="noopener noreferrer"style={{textDecoration: 'none', color:'black'}}>
                <img src={doable} style={{width:'300px', height:'200px'}}/>

                <div>
                    <Subtitle>Planner</Subtitle>
                    <div>Application that allows the user to manage assignments</div>
                    <br/>
                    <div>
                        <Tech1>#Javascript</Tech1>
                    </div>
                </div>
                
            </Project>

            <Project href="https://main--alexanderorganz.netlify.app/" alt="keepable" target="_blank"  rel="noopener noreferrer" style={{textDecoration: 'none', color:'black'}}>
                <img src={organizable } style={{width:'300px', height:'200px'}}/>

                <div>
                    <Subtitle>Organizer</Subtitle>
                    <div>Is difficult for you organize your projects? This app will help you with that</div>
                    <br/>
                    <div>
                        <Tech1>#Javascript</Tech1>
                    </div>
                </div>
                
            </Project>

            <Project href="https://statalex.netlify.app/" alt="keepable" target="_blank"  rel="noopener noreferrer" style={{textDecoration: 'none', color:'black'}}>
                <img src={gitstat} style={{width:'300px', height:'200px'}}/>

                <div>
                    <Subtitle>Contact Manager</Subtitle>
                    <div>Useful app to organize contacts in your computer</div>
                    <br/>
                    <div>
                        <Tech1>#React</Tech1>
                    </div>
                </div>
                
            </Project>

           

            <Project href=" https://get-that-job-nieves.netlify.app/" alt="keepable" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color:'black'}}>
                <img src={getjob} style={{width:'300px', height:'200px'}}/>

                <div>
                    <Subtitle>Get that job</Subtitle>
                    <div>App that allow users to interact with companies and help you to get a job</div>
                    <br/>
                    <div>
                        <Tech1>#React #Ruby on Rails #Javascript</Tech1>
                    </div>
                </div>
                
            </Project>

        </ZoneProject>

        
        {/* <img src={lines} style={{width:'100%', opacity:'0.9', position:'absolute', zIndex:'-1'}}/> */}
    </Main>  
    );
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-content:center;
    align-items:center;
    justify-content: center;
    background-color: ${colors.purple[10]};
    padding-bottom:150px;

    `

    const Title= styled.div`
    font-family:${fonts.primary};
    font-weight:700;
    font-size:30px;
    color:white;
    padding:20px;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`

const Project = styled.a`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${colors.purple[40]};
    width: 350px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
    padding: 30px;
    transition: transform 0.3s ease;

    &:hover {
        transform: rotate(5deg); /* Rotate slightly */
    }
`;

const Subtitle = styled.div`
    font-family:${fonts.primary};
    font-weight:700;
    font-size:20px;
    color:white;

`

const Tech1= styled.div`
    font-family:${fonts.primary};
    color:white;
    font-size:15px;
`

const ZoneProject = styled.div`
    position: relative;
    display:flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content:center;
`