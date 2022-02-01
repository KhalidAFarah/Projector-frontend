import React from 'react'

const Video = (props:any) => {
    let classes = "video";
    if(props.classes != undefined){
        classes += props.classes;
    }
    return (
        <div className={classes} >
            <p><iframe   width="560" height="315" src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe></p>
        </div>
    )
}

export default Video
