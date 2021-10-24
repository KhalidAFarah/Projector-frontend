import React from 'react'

const Card = (props) => {
    return (
        <div className="Card">
            <img src={propss.img}/>
            <div>
                <h4>{props.title}</h4>
                <p>{props.txt}</p>
            </div>
        </div>
    )
}

export default card
