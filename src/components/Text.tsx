
const Text = (props:any) => {
    let classes = "p"
    if(props.classes != undefined){
        classes += props.classes;
    }
    
    return (
        <p tabIndex={0} className={classes} style={{marginTop: "2rem", marginBottom:"2rem"}}>{props.txt}</p>
    )
}

export default Text
