import Selection from './Selection';
const Selector = (props:any) => {
    return (
        <div className="row">
        <div className="selector row justify-content-center">
            <Selection txt={props.txtbtn1} func={props.func1}/>
            <Selection txt={props.txtbtn2} func={props.func2}/>
        </div>

        <div className="row">
            <span className={props.link == 3 ? "underscore lg-col-3 md-col-3 sm-col-3 offset-3" : "underscore lg-col-3 md-col-3 sm-col-3 offset-6" }></span>
        </div>
        </div>
        
    )
}

export default Selector
