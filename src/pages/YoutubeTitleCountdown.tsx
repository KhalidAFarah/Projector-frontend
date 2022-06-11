/*import Button from 'react-bootstrap/Button';
import { useState } from 'react';
//import gapi from "gapi-client";
const YoutubeTitleCountdown = () => {
  
    //process.env.REACT_APP_YT_CLIENT_ID
    //process.env.REACT_APP_YT_REDIRECT_URL_COUNTDOWN

    //const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
    //const SCOPES = "https://www.googleapis.com/auth/youtube.force-ssl,https://www.googleapis.com/auth/youtube.readonly";

    const params = new URLSearchParams(window.location.href);
    const [code, setCode] = useState(params.get("code"));


  const start = ()=>{
    fetch("localhost:9200/api/youtube/videos").then((data) => {

    })
  }

    
    
  
    return (
      
        <div className="App">
          { code === "" ?
          <Button onClick={() =>  {
            //fetch("localhost:9200/api/youtube/url/").then((data) =>{
              //window.location.href = data;
            //})

            window.location.href = "https://accounts.google.com/o/oauth2/auth?access_type=online&client_id=70790749013-e5edea7s4j6626svqc601gcg1vmjclvt.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fproteje.netlify.app%2F&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.force-ssl&state=state-token";
          }}>Authorize</Button>  : 
          
          
          
          {start}
          
          
          }
        </div>
        
    )
}
//<script async defer src="https://apis.google.com/js/api.js" onLoad={() => {this?.onload=function(){};handleClientLoad()}} onReadyStateChange={() => {if(this?.readyState === 'complete') this?.onLoad()}}></script>

export default YoutubeTitleCountdown */

import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
//import axios, { AxiosResponse } from "axios";
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
        console.log('it worked');

      });
    }


    

  }, [])


  const [user, setUser] = useState<User | null>(null);
  const onSuccess = async (res: any) => {
    console.log(res)

    console.log(gapi)
    console.log(gapi.client.drive.channels)
    console.log("-"+res.tokenObj.token_type + ' ' + res.tokenObj.access_token+"-")
    const payload:any = {
      part: "contentDetails",
      mine: true,
      key: process.env.REACT_APP_YT_API_KEY
    }

    fetch("https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key="+process.env.REACT_APP_YT_API_KEY,{
      method: "GET",
      'mode':'no-cors',
      headers: {
        Authorization: res.tokenObj.token_type + ' ' + res.tokenObj.access_token,
        Accept: 'application/json',
      }
    }).then( (data) => {
      console.log("--------")
      console.log(data)
    })



    /*fetch("http://localhost:9200/api/youtube/videos/"+res.accessToken+"/",  {
      mode: 'cors',
    }).then((response) => {
      if(response.ok){
        return response.json();
      }
      throw response
    }).then((data) => {
      console.log(data)
    })*/
    /*try {
      const result: AxiosResponse<AuthResponse> = await axios.post("/auth/", {
        token: res?.tokenId,
      });

      setUser(result.data.user);
    } catch (err) {
      console.log(err);
    }*/
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      {!user && (
        <GoogleLogin
          clientId={`${process.env.REACT_APP_YT_CLIENT_ID}`}
          onSuccess={onSuccess}
        />
      )}

      {user && (
        <>
          <img src={user.avatar} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {user.name}
          </h1>
        </>
      )}
    </div>
  );
};
export default YoutubeTitleCountdown