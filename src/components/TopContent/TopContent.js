import React from 'react'
import {Link} from 'react-scroll'
import './TopContent.css'

function TopContent() {
  return (
    <div className='topContent' id="about">
        <img src="https://res.cloudinary.com/dsx3dj12i/image/upload/v1684305659/IMG_20221007_171815_1_gpzx0e.jpg" alt="" className="image"/>
        <div className="topContent_container">
            <h1>Tirupathamma Gunji</h1>
            <p>A Web and App Developer</p>
            <a href="https://drive.google.com/file/d/1O8hDsqUYVhMSbtcEKKiGcTsFv2p3Zczx/view?usp=drive_link">
                <button className='downloadButton'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="workButton">My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
