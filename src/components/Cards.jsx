import React from 'react'
import Card from './Card'
import '../index.css';

const Cards = ({cards}) => {


    return (
        <div className="Cards row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
           {cards.map((card, index) => (
               <Card key={index} img={card.img} title={card.title} txt={card.txt} clickfunc={card.clickfunc}/>
           ))}
        </div>
    )
}

export default Cards

