import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/background_rice.jpg'

import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>SushiVerse</h1>
        <p>Découvrez une nouvelle dimension de sushis.</p>
        <Link to="/menu">
          <button>Commandez maintenant</button>
        </Link>
      </div>
    </div>
  )
}

export default Home