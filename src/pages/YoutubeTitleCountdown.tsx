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
    function start(){
      gapi.client.init({
        clientId: process.env.REACT_APP_YT_CLIENT_ID,
        scope: "https://www.googleapis.com/auth/youtube.force-ssl"
      })
    }

    gapi.load('client:auth2')
  })


  const [user, setUser] = useState<User | null>(null);
  const onSuccess = async (res: any) => {
    console.log(res)
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