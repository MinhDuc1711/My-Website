import React from 'react'
import './Hero.css';
import '../App.css';
import { Button } from './Button';

function Hero() {
  return (
    <div className='hero-container'>
      <video src="/videos/background_vid.mp4" autoPlay loop muted />
      <h1>Vid here</h1>
      <p>This is some text</p>
      <div className="hero-btns">
        <Button to='projects' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          BEGIN
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          BEGIN2 <i className='far-fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default Hero
