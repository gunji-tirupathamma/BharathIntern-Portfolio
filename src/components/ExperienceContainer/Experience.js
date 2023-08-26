import React from 'react'
import { Element } from 'react-scroll'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
import './Experience.css'

const  Experience=()=> {
  return (
    <Element id="expe" className="experienceContainer">
      <h1>Experience</h1>
      <div className="experienceContainer_info">
        <ExperienceBox  number="+40" title="Websites Build" style={{backgroundColor: '#f227d0'}}/>
        <ExperienceBox  number="+10" title="Projects" style={{backgroundColor: '#6959f7'}}/>
        <ExperienceBox  number="+5" title="InternShips" style={{backgroundColor: '#fa5295'}}/>
        <ExperienceBox  number="+400" title="Programs" style={{backgroundColor: '#20a103'}}/>
      </div>
         
    </Element>
  )
}

export default Experience
