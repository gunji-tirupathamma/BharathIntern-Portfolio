import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@mui/material'
import { LinkedIn,GitHub,Facebook } from '@mui/icons-material'
import './Contact.css'

const  Contact=()=> {
  return (
    <Element id="contact" className='contact_container'>
        <h1>Contact</h1>
        <div className='contactContainer'>
            <h2>Tirupathamma Gunji</h2>
            <p>
                Email :<span>tirupathammagunji@gmail.com</span>
            </p>
            <p>
                Github :<span>https://github.com/gunji-tirupathamma</span>
            </p>
            <p>
               Phone.No: <span>9014XXXXXX</span>
            </p>

            <div className='contactIcons'>
                <a href="https://www.linkedin.com/in/gunji-tirupathamma-434b31252/">
                    <IconButton>
                        <LinkedIn className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="https://www.facebook.com/gunji.tirupathamma">
                    <IconButton>
                        <Facebook className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="https://github.com/gunji-tirupathamma">
                    <IconButton>
                        <GitHub className='iconSize' />                        
                    </IconButton>
                </a>
            </div>
        </div>
        

    </Element>
  )
}

export default Contact
