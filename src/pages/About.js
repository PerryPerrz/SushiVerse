import React from 'react'
import BannerImage from '../assets/background_sushi.jpg'

import '../styles/About.css'

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className='aboutBottom'>
                <h1 className='aboutTitle'>About Us</h1>
                <p>"SushiVerse" est né de la passion de son fondateur, le chef sushi Hiro, pour la cuisine japonaise.</p>
                <p>Son rêve était de créer un magasin de sushi unique en son genre, où les clients pourraient découvrir des sushis innovants et surprenants, préparés avec les ingrédients les plus frais et les techniques les plus fines.</p>
                <p>Aujourd'hui, SushiVerse est devenu une destination incontournable pour tous ceux qui cherchent une expérience culinaire unique, dans un cadre chaleureux et accueillant.</p>
            </div>
        </div>
    )
}

export default About