import { Container, Row, Col, Image } from "react-bootstrap"

interface args {
  image:string;
  name:string;

  kinetic:any;
  energy:any;
  heavy:any;

  helmet:any;
  gauntlets:any;
  chest_armor:any;
  leg_armor:any;
  class_armor:any;

}

const Build = (props:args) => {

  let displayable:args = {
    image: props.image,
    name: props.name, 

    kinetic: props.kinetic || "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    energy: props.energy || "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    heavy: props.heavy || "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",

    helmet: props.helmet || "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    gauntlets: props.gauntlets || "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    chest_armor: props.chest_armor || "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    leg_armor: props.leg_armor || "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    class_armor: props.class_armor || "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png"
  };


  return (
    <Container fluid style={{backgroundColor:"#333333"}}>
      <Image style={{opacity: "50%"}} src={props.image} />
      <Container style={{position: "absolute", top:"2%"}}>
        <Row>
          <Col style={{paddingLeft: "25%" , paddingTop:"30%"}}>

            <Row >
              <Image  src={displayable.kinetic}></Image>
            </Row>
            <Row style={{marginTop: "30%"}}>
              <Image src={displayable.kinetic}></Image>
            </Row>
            <Row>
              <Image src={displayable.energy}></Image>
            </Row>
            <Row>
              <Image src={displayable.heavy}></Image>
            </Row>


            


          </Col>

          <Col>
          
          </Col>
        </Row>
        
      </Container>
      
    </Container>
  )
}

export default Build