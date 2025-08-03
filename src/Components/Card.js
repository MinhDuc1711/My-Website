import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
  return (
    <div className='cards'>
        <h1>Check out my test</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/logo192.png"
                    text="Some text that needs to be long enough for me to fill a box 1"
                    label="test label"
                    path='/projects'
                    />
                    <CardItem 
                    src="images/logo192.png"
                    text="Some text that needs to be long enough for me to fill a box 2"
                    label="test label"
                    path='/projects'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card
