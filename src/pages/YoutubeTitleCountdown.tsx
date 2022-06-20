

import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { Button, Form, Row, Card, Col, Container, CardGroup } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import { isArray } from "util";

interface AuthResponse {
  token: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

const YoutubeTitleCountdown = () => {
  useEffect(() => {
    //On load, called to load the auth2 library and API client library.
    gapi.load('client:auth2', initClient);
    
    // Initialize the API client library
    function initClient() {
      gapi.client.init({
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        clientId: process.env.REACT_APP_YT_CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl'
      }).then(function () {
        // do stuff with loaded APIs
        //console.log('it worked');

      });
    }


    

  }, [])


  const [token, setToken] = useState("");
  const [next, setNext] = useState("");

  const def:any[] = []
  const [videos, setVideos] = useState([]);
  const [shownVideos, setShownVideos] = useState([]);
  const [chosen, setChosen] = useState(def);

  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);

  const onSuccess = async (res: any) => {
    setToken(res.tokenObj.access_token)
    //console.log(res)

    //console.log("-"+res.tokenObj.token_type + ' ' + res.tokenObj.access_token+"-")
    

    fetch("/api/youtube/?token="+res.tokenObj.access_token,{
    
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then((response) => {
      if(response.ok){
        return response.json();
      }
      throw response;
    }).then( (data) => {
      console.log(data)

      setNext(data.nextPageToken)

      setVideos(data.items);
      setShownVideos(data.items);
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
  <Container fluid>


    <Row style={{marginTop:"1rem"}}>

    <Col lg={{span:3, offset: 1}}>
      <Row>
        <Col>
          <GoogleLogin
            clientId={`${process.env.REACT_APP_YT_CLIENT_ID}`}
            onSuccess={onSuccess}
          />
        </Col>

        <Col>
          {token != "" && (
            <Button variant="primary" onClick={()=>{
              if(next != "") {
                fetch("/api/youtube/?token="+token+"&next="+next,{
        
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  }
                }).then((response) => {
                  if(response.ok){
                    return response.json();
                  }
                  throw response;
                }).then( (data) => {
                  console.log(data)
                }).catch((error) => {
                  console.log(error)
                })
              }
            }}>Show more</Button>
          )}
        </Col>
      </Row>
        
      
    </Col>

    <Col lg={{span:4, offset:3}}>

    <Row>
      <Col>
      <Form.Control type="text"  placeholder="Displayed text with '-x-' as the time "/>
      </Col>
    </Row>
    <br/>

    <Row>
      <Col lg={3}>
        <Form.Control type="number" placeholder="Hours" onChange={(e:any) => {
          setHour(e.target.value)
        }}/>
      </Col >
      <Col lg={1} className="text-center" ><Form.Label style={{color:"white", fontSize:"1.3rem"}}>:</Form.Label></Col>
      <Col lg={3}>
        <Form.Control placeholder="Minutes" type="number" onChange={(e:any) => {
          setMin(e.target.value)
        }}/>

      </Col>
    </Row>
    <br/>

    <Row>
      <Col>
          <Button variant="primary" onClick={() => {
            fetch("/api/youtube/?hour="+hour+"&min="+min,{
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
              body: JSON.stringify(chosen)
            }).then((response) => {
              if(response.ok){
                return response.json();
              }
              throw response;
            }).then( (data) => {
              console.log(data)
            }).catch((error) => {
              console.log(error)
            })
          }}>Submit</Button>
      </Col>
    </Row>
    </Col>

    </Row>

    <Row style={{marginTop:"6rem", marginBottom: "1rem"}}>
        <Col lg={{span:4, offset:4}}>
          
          <Form.Control type="text" onChange={(e:any) => {

            const searchedVideos = videos.filter((video:any) => video.snippet.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setShownVideos(searchedVideos)
          }} placeholder={"Search"}/>

        </Col>
      </Row>


    <Row><Col lg={{span:10, offset:1}}><Row lg={4} className="g-4">
      

      
      {shownVideos.map((video:any, index:number) => (
        <Col>

          
        <Card id={"vidId-" + index} onClick={(e:any)=> {
       
          const elem:any = document.getElementById("vidId-" + index);
          console.log(e.target.className)
          
         

          if(elem.style.border == ""){
            elem.style.border = "solid #0d6efd 0.1rem";
            setChosen([...chosen, video]);
          }else{
            elem.style.border = "";
            const t = chosen.filter((element) => element != video);
            console.log(t)
            setChosen(t);
          }
            

          //console.log(chosen)


        }}  key={index} style={{ width: '18rem', margin: "1rem" }} >
          <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
          <Card.Body>
            <Card.Title>{video.snippet.title}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
      ))}
      </Row>
      </Col>
      </Row>
    </Container>
  );
};
export default YoutubeTitleCountdown

/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>*/