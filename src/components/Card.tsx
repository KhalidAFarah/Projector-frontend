
const Card = (props:any) => {

   

    return (
        <div className="Card col" style={{paddingLeft: 3+"rem", paddingRight: 3+"rem"}} onClick={props.clickfunc}>
            <div className="card h-100 border-dark" style={{transitionDuration: 0.2+"s"}}>
                <img src="../../public/" alt="sup" className="card-img-top"/>
                <div className="card-body Card-body" >
                    <h4 className="card-title text-start">{props.title}</h4>
                    <p className="card-text text-start fs-5 p-2">{props.txt}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
