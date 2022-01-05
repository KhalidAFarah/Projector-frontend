
const TextHeader = (props:any) => {
    let classes = "h1 ";
    if(props.classes != undefined){
         classes += props.classes;
    }
    return (
        <p className={classes} style={{marginTop:"5rem"}}>{props.txt}</p>
    )
}

export default TextHeader
