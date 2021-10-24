import React from 'react'
import testingimage from "../testimage.PNG";


const Card = (props) => {

   

    return (
        <div className="Card" onClick={props.clickfunc}>
            <img src={testingimage} alt="sup"/>
            <div className="Card-text">
                <h4>{props.title}</h4>
                <p>{props.txt}</p>
            </div>
        </div>
    )
}

export default Card
