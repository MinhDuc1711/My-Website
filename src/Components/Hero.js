import React from 'react'
import './Hero.css';
import '../App.css';
import { Button } from './Button';

function Hero() {
  return (
    <div className='hero-container'>
      <video src={process.env.PUBLIC_URL + "/videos/background_vid.mp4"} autoPlay loop muted />
      <h1>Welcome to my website</h1>
      <p>Let's get started</p>
      <div className="hero-btns">
        <Button to='projects' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Projects
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          About me <i className='far-fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default Hero
