import React from 'react'
import { Row } from 'react-bootstrap';
import { useState } from 'react';


const Card = (props:any) => {
    
   
//style={ pressed == false ? {paddingLeft: 3+"rem", paddingRight: 3+"rem"} : {paddingLeft: 3+"rem", paddingRight: 3+"rem", transform: "scale("+100+")", transitionDuration: 1000+"ms", zIndex: 100} }
    return (


        <div className="Card col" style={{paddingLeft: 3+"rem", paddingRight: 3+"rem"}}  onClick={
            () =>{
                //props.setPressed(true)
                
                window.location.href = props.link; 
                //props.clickfunc()
            }
        }>
             <div className="card h-100 border-dark" style={{transitionDuration: 0.2+"s"}}>
             
                <div>
                    <img src={"/images/"+props.img} alt="sup" className="card-img-top"/>
                    <div className="card-body Card-body" >
                        <h4 className="card-title text-start">{props.title}</h4>
                        <p className="card-text text-start fs-5 p-2">{props.txt}</p>
                    </div>
                    </div>
                 
            </div>
        </div>
    )
}

export default Card
