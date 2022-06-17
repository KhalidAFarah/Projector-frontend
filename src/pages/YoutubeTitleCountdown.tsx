

import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { Button, Form, Row, Card, Col } from "react-bootstrap";
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
  <>
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

<Col>

        <Form.Control type="text" onChange={(e:any) => {

          const searchedVideos = videos.filter((video:any) => video.snippet.title.toLowerCase().includes(e.target.value.toLowerCase()))
          setShownVideos(searchedVideos)
        }}/>

</Col>
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
<Col>
<Form.Control type="number" onChange={(e:any) => {
  setHour(e.target.value)
}}/>
</Col>

<Col>
<Form.Control type="number" onChange={(e:any) => {
  setMin(e.target.value)
}}/>

</Col>
      
    </Row>
    <Row>
      {shownVideos.map((video:any, index:number) => (
        <Card onClick={(e:any)=> {

          if(e.target.style != "Border: solid #0d6efd 0.1rem"){
            e.target.style = "Border: solid #0d6efd 0.1rem";
            setChosen([...chosen, video]);
          }else{
            e.target.style = "";
            const t = chosen.filter((element) => element != video);
            console.log(t)
            setChosen(t);
          }
            

          //console.log(chosen)


        }} key={index} style={{ width: '18rem', margin: "1rem" }}>
          <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
          <Card.Body>
            <Card.Title>{video.snippet.title}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            
          </Card.Body>
        </Card>
      ))}
    </Row>
    </>
  );
};
export default YoutubeTitleCountdown