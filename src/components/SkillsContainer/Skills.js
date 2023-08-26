import React from 'react'
import { Element } from 'react-scroll'
import LinearProgress from "@mui/material/LinearProgress";
import './Skills.css'


function Skills() {
  return (
    <Element className='skillContainer' id="skills">
        <h2>Skill Set</h2>
        <div className='skillsBgContainer'>
            <div className="skillContainer_image">
                <img src="https://thwartsystemsgh.com/images/Tech_tips/istockphoto-1319404394-170667a.jpg"  alt="" className='skill_image'/>
            </div>

            <div className="skills_text">
            
                <div className='skillSet'>
                    <h5>HTML</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={90} className='progress1' />
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>CSS</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={90} className='progress2'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>PYTHON</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={80} className='progress3'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>SQL</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={85} className='progress4'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>JAVA SCRIPT</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={78} className='progress5'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>NODE JS</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={75} className='progress6'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>REACT JS</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={70} className='progress7'/>
                    </div>
                </div>

            </div>
        </div>

    </Element>
  )
}

export default Skills
