import React from 'react'

const Image = (props:any) => {
    return (
        <div className='image-box'>
            <img src={props.src}/>
        </div>
    )
}

export default Image
