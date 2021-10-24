const Selection = (props) => {
    return (
        <div className="selection">
            <button onClick={props.func}>{props.txt}</button>
        </div>
    )
}

export default Selection
