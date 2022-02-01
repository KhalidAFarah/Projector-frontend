const Selection = (props:any) => {
    return (
        <div className="selection col-3">
            <button onClick={props.func} className="text-start-center">{props.txt}</button>
        </div>
    )
}

export default Selection
