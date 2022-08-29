import { Container, Row, Col, Image, Card } from "react-bootstrap"

interface args {
  image:string;
  name:string;

  subclass:any;

  kinetic:any;
  energy:any;
  heavy:any;

  helmet:any;
  gauntlets:any;
  chest_armor:any;
  leg_armor:any;
  class_armor:any;

}

const Build = (props:any) => {

  let displayable:args = {
    image: '/images/lazer_tag_guardian.png',//props.build.image,
    name: props.build.name, 

    subclass: "https://www.bungie.net"+props.build.subclass.item.displayProperties.icon,

    kinetic: props.build.kinetic.item != null ? "https://www.bungie.net"+ props.build.kinetic.item.displayProperties.icon : "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    energy: props.build.energy.item != null ? "https://www.bungie.net"+props.build.energy.item.displayProperties.icon : "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    heavy: props.build.heavy.item != null ? "https://www.bungie.net"+props.build.heavy.item.displayProperties.icon : "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",

    helmet: props.build.helmet.item != null ? "https://www.bungie.net"+props.build.helmet.item.displayProperties.icon : "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    gauntlets: props.build.gauntlets.item != null ? "https://www.bungie.net"+props.build.gauntlets.item.displayProperties.icon : "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    chest_armor: props.build.chest_armor.item != null ? "https://www.bungie.net"+props.build.chest_armor.item.displayProperties.icon : "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    leg_armor: props.build.leg_armor.item != null ? "https://www.bungie.net"+props.build.leg_armor.item.displayProperties.icon : "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png",
    class_armor: props.build.class_armor.item != null ? "https://www.bungie.net"+props.build.class_armor.item.displayProperties.icon : "https://www.bungie.net/common/destiny2_content/icons/4d19ce623e24b54f5cff385baed7d7fd.png"
  };


  return (
    <Col>
    <Card style={{backgroundColor:"#333333", margin: "10%", border: "solid black .2em"}}>
    <Image style={{opacity: "50%", width: "100%"}} src={displayable.image} />
      <Container style={{position: "absolute", top:"2%"}}>
        <Row>
          <Col sm={3} md={3} lg={3} style={{paddingLeft: "5%" , paddingTop:"20%"}}>

            <Row >
              <Image style={{width:"100%", margin:"15%"}}  src={displayable.subclass}></Image>
            </Row>
            <Row style={{marginTop: "30%", marginBottom: "15%"}}>
              <Image style={{width:"100%"}} src={displayable.kinetic}></Image>
            </Row>
            <Row>
              <Image style={{width:"100%", marginBottom: "15%"}} src={displayable.energy}></Image>
            </Row>
            <Row>
              <Image style={{width:"100%"}} src={displayable.heavy}></Image>
            </Row>
          </Col >

          <Col sm={{span:3, offset:6}} md={{span:3, offset:6}} lg={{span:3, offset:6}} style={{paddingLeft: "5%" , paddingTop:"20%"}}>
          <Row >
              <Image style={{width:"100%", marginBottom:"5%"}}  src={displayable.helmet}></Image>
            </Row>
            <Row>
              <Image style={{width:"100%", marginBottom:"5%"}} src={displayable.gauntlets}></Image>
            </Row>
            <Row>
              <Image style={{width:"100%", marginBottom:"5%"}} src={displayable.chest_armor}></Image>
            </Row>
            <Row>
              <Image style={{width:"100%", marginBottom:"5%"}} src={displayable.leg_armor}></Image>
            </Row>
            <Row>
              <Image style={{width:"100%"}} src={displayable.class_armor}></Image>
            </Row>
          </Col>
        </Row>
        
      </Container>
      
    </Card>
    </Col>
  )
}

export { Build }