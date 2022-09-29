

import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { Button, Form, Row, Card, Col, Container, CardGroup } from "react-bootstrap";
import GoogleLogin from "react-google-login";

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
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl'
        
      }).then(function () {
        // do stuff with loaded APIs
        //console.log('it worked');

      });
    }


    

  }, [])



  const [token, setToken] = useState("");
  const [next, setNext] = useState(null);

  const def:any[] = [];
  const [videos, setVideos] = useState(def);
  const [shownVideos, setShownVideos] = useState(def);
  const [chosen, setChosen] = useState(def);

  const [displaytext, setDisplaytext] = useState("");
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);

  const onSuccess = async (res: any) => {console.log(res)
    setToken(res.tokenObj.access_token)
    

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

  const cardclick = (video:any)=> {
       
    const elem:any = document.getElementById(video.id);
    console.log(chosen)
    
   

    if(elem.style.border == ""){
      elem.style.border = "solid #0d6efd 0.2rem";
      setChosen([...chosen, video]);
    }else{
      elem.style.border = "";
      const t = chosen.filter((element) => element != video);
      setChosen(t);
    }
      

    //console.log(chosen)


  }
  

  const card = (video:any) => {

    
    let styles:any = { width: '18rem', margin: "1rem" }

    for(let i = 0; i < chosen.length; i++){
     if(chosen[i].id == video.id){
      styles = { width: '18rem', margin: "1rem", border: "solid #0d6efd 0.2rem" };
      break
     } 
    }
    

    return (
      <Card id={video.id} onClick={()=>{cardclick(video)}} style={styles} >
            <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
            <Card.Body>
              <Card.Title>{video.snippet.title}</Card.Title>
              <Card.Text>
                
              </Card.Text>
              
            </Card.Body>
          </Card>
    )
  }
  

  return (
  <Container fluid>


    <Row style={{marginTop:"1rem"}}>

    <Col lg={{span:3, offset: 1}}>
      <Row>
        <Col>
          <GoogleLogin
            clientId={`${process.env.REACT_APP_YT_CLIENT_ID}`}
            onSuccess={onSuccess}
            accessType='offline'
            responseType="code"
          />
        </Col>

        <Col>
          {token != "" && (
            <Button variant="primary" onClick={()=>{
              if(next != null) {
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
                  let tmp = videos
                  for(let vid of data.items){
                    tmp = [...tmp, vid]
                  }
                  setVideos(tmp);
                  setShownVideos(tmp);

                  setNext(data.nextPageToken)
                }).catch((error:any) => {
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
      <Form.Control type="text"  placeholder="Displayed text with '-x-' as the time" onChange={(e:any) => {
        setDisplaytext(e.target.value)
      }}/>
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

            for(let video of chosen){
              let videoInfo = {
                id: video.id,
                snippet: {
                  title: video.snippet.title,
                  //categoryId: video.snippet.,
                  description: video.snippet.description,
                  //tags: ["live"]
                }
              }

              fetch("/api/youtube/?token="+token+"&displaytext="+displaytext+"&hour="+hour+"&min="+min,{
                method: "PUT",
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
                body: JSON.stringify(video)
              })
              /*.then((response) => {
                if(response.ok){
                  return response.json();
                }
                throw response;
              }).then( (data) => {
                console.log(data)
              })*/
              .catch((error) => {
                console.log(error)
              })
            }
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
        <Col key={index}>

          {card(video)}
          
        </Col>
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