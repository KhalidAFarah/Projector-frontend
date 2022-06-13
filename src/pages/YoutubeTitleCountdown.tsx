

import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
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
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      
        <GoogleLogin
          clientId={`${process.env.REACT_APP_YT_CLIENT_ID}`}
          onSuccess={onSuccess}
        />
      

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

      
    </div>
  );
};
export default YoutubeTitleCountdown