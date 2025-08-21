import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
  return (
    <div className='cards'>
        <h1>Check out my projects</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={process.env.PUBLIC_URL + "/images/logo192.png"}
                    text="Simulated real estate management website built using Python, REST and Express"
                    label="Real estate website"
                    path='/projects'
                    />
                    <CardItem 
                    src={process.env.PUBLIC_URL + "/images/logo192.png"}
                    text="Gamified solution to urban planning built using Unity 3D and C#"
                    label="Urban planning game"
                    path='/projects'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card
