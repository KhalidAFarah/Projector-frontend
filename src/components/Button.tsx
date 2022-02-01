import React from 'react'

const Button = (props:any) => {
    return (
        <div>
            <button className="btn btn-primary" onClick={props.onClick}>{props.txt}</button>  
        </div>
    )
}

export default Button
