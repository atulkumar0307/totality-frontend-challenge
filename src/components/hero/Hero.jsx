import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
// import hero_img from '../../assets/hero-img.jpg'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
          <h2>Rent an Apartment</h2>
          <p>Beautiful apartment in the city</p>
          <div className='left-button'>
            <Link to='/properties'><button>Explore more</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Hero
