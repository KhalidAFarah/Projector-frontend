import Selection from './Selection';
const Selector = (props) => {
    return (
        <div>
        <div className="selector">
            <Selection txt={props.txtbtn1} func={props.func1}/>
            <Selection txt={props.txtbtn2} func={props.func2}/>
        </div>

        <span className="underscore"></span>
        </div>
        
    )
}

export default Selector
