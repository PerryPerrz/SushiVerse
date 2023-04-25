import React from 'react'
import BannerImage from '../assets/background_sushi.jpg'

import '../styles/About.css'

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className='aboutBottom'>
                <h1 className='aboutTitle'>About Us</h1>
                <p>Sushi Gods</p>
            </div>
        </div>
    )
}

export default About