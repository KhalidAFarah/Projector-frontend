import {Row, Col, Image} from "react-bootstrap";

const HoverWeapon = (props:any) => {
    console.log(props)
  const render = ()=> {

    if(props.item.recomended_perks.length != 0 || props.item.item != null){
      if(props.item.recomended_perks.length != 0 && props.item.item != null){
        console.log("1")
        return(
          <div style={{backgroundColor: "#262A2B", opacity:"90%", transition: "0.3s", position: "absolute", width:"100%", height:"50%", marginTop:"-53%"}}>
            <Row>
              <p className="h3">{props.item.item.displayProperties.name}</p>
            </Row>
            <Row>
              <p className="h3">Recomended perks</p>
            </Row>
            <Row>
              {props.item.recomended_perks.map((index:number, perk:any) => (
                <Col>
                  <Image src={perk.displayProperties.icon} style={{width: "100%"}}/>
                </Col>
              ))}
            </Row>

          </div>
        )

      }else if(props.item.recomended_perks.length != 0){
        console.log(props.item.recomended_perks[0].displayProperties.icon)
        return(
          <div style={{backgroundColor: "#262A2B", opacity:"90%", transition: "0.3s", position: "absolute", width:"100%", height:"50%", marginTop:"-53%"}}>
            <Row>
              <p className="h3" style={{color: "white"}}>Recomended perks</p>
            </Row>
            <Row>
              {props.item.recomended_perks.map((perk:any, index:number) => (
                <Col lg={3}><p>{index}</p>
                  <Image src={"https://www.bungie.net"+perk.displayProperties.icon} style={{width: "100%"}}/>
                </Col>
              ))}
            </Row>

          </div>
        )

      }else if(props.item.item != null){
        console.log(props.item)
        return(
          <div style={{backgroundColor: "#262A2B", opacity:"90%", transition: "0.3s", position: "absolute", width:"100%", height:"50%", marginTop:"-53%"}}>
            <Row>
              <p className="h3">{props.item.item.displayProperties.name}</p>
            </Row>
          </div>
        )

      }
      

    }else{
      return(
        <div style={{backgroundColor: "#262A2B", opacity:"90%", transition: "0.3s", position: "absolute", width:"100%", height:"50%", marginTop:"-53%"}}>
          <p className="h3" style={{color:"white"}}>You decide what goes here!</p>
        </div>
      )
    }
  }
  return(<>{render()}</>)
}

export {HoverWeapon}