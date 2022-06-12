

import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
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

    console.log("-"+res.tokenObj.token_type + ' ' + res.tokenObj.access_token+"-")
    

    await fetch("localhost:9200/api/youtube?token="+res.tokenObj.access_token,{
      method: "GET",
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Origins': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': res.tokenObj.token_type + ' ' + res.tokenObj.access_token
      }
    }).then((response) => {
      if(response.ok){
        return response.json;
      }
      throw response;
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