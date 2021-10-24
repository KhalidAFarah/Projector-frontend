import React from 'react'
import Card from './Card'
import '../index.css';

const Cards = ({cards}) => {


    return (
        <div className="Cards">
           {cards.map((card, index) => (
               <Card key={index} img={card.img} title={card.title} txt={card.txt} clickfunc={card.clickfunc}/>
           ))}
        </div>
    )
}

export default Cards

