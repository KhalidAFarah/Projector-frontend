import {Row} from "react-bootstrap"
import { Build } from "./Build"

const Builds = (props:any) => {
    const generate = ()=>{
        if(props.builds.warlock != null){
            return props.builds.warlock.map((obj:any, index:number) => (
                <Build key={"build-"+index} build={obj}/>
            ))
            
        }
    }
    return (
        <Row style={{marginLeft: "10%", marginRight: "10%"}} className="g-3">
            {generate()}
        </Row>
    )
}

export { Builds }