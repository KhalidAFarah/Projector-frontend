import React from 'react'
import Card from './Card'
import '../index.css';
import waves from '../wave-haikei.svg'

const Cards = (props:any) => {
    let divstyle;
    if(props.class === "proj"){
        if(props.link == 3){
            divstyle = {};
        }else{
            divstyle = {marginLeft: "100rem"};
        }

    }
   else{
        if(props.link == 3){
            divstyle = {marginLeft: "100rem"};
        }else{
            divstyle = {};
        }

    }
    

    return (
        <div className="background-cards" style={divstyle}>
            <svg id="visual" viewBox="0 0 900 150" width="100%" xmlns="http://www.w3.org/2000/svg"  version="1.1">
                    <rect x="0" y="0" width="900" height="100" fill="#eb7f20"></rect>
                    <path d="M0 60L10 62.5C20 65 40 70 60 63.3C80 56.7 100 38.3 120 49.5C140 60.7 160 101.3 180 113C200 124.7 220 107.3 240 89.5C260 71.7 280 53.3 300 60.7C320 68 340 101 360 110.3C380 119.7 400 105.3 420 94.2C440 83 460 75 480 84.7C500 94.3 520 121.7 540 119.8C560 118 580 87 600 76.3C620 65.7 640 75.3 660 84.7C680 94 700 103 720 102.7C740 102.3 760 92.7 780 76.2C800 59.7 820 36.3 840 38.3C860 40.3 880 67.7 890 81.3L900 95L900 0L890 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z" fill="#333333" stroke-linecap="round" stroke-linejoin="miter"/>
                    
                </svg>
            <div className="container">
                
                <div className="Cards row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
           {props.cards.map((card:any, index:number) => (
               <Card key={index} img={card.img} title={card.title} txt={card.txt} clickfunc={card.clickfunc} setPressed={props.setPressed} link={card.link}/>
           ))}
           </div>
        
        </div>
        </div>
    )
}

export default Cards

