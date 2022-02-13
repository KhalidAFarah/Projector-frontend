import Btn from "../components/Button"
import { useEffect } from "react"
//import { Buttton } from "react-bootstrap/button";
const DestinyOAUTH = (props:any) => {
    
    const authorizeOnClick = () => {
        window.location.href = "https://www.bungie.net/en/OAuth/Authorize?client_id=39222&response_type=code"
    }

    useEffect(() => {
        (async () => {

            const code = window.location.search.replace("?code=", "");

            if(code != "") {
                const response = await fetch("https://www.bungie.net/Platform/App/OAuth/Token/?client_id=39222&grant_type=authorization_code&code="+code, {
                    method: 'POST',
                    headers: {
                        'Access-Control-Allow-Origin': 'https://www.bungie.net',
                        'Content-Type':'application/json',
                        'client_id':'39222',
                        'grant_type':'authorization_code',
                        'code':code

                    }
                }).then(response => {
                    if(response.ok){
                        return response.json();
                    }
                    throw response
                    
                }).then(data => {
                    console.log(data);
                }).catch( error => {
                    console.log("Unable to get accesstoken");
                })
            }   
            })()
      }, []);

    /*
    POST https://www.bungie.net/Platform/App/OAuth/Token/ HTTP/1.1
Content-Type: application/x-www-form-urlencoded

client_id={client-id}&grant_type=authorization_code&code={auth-code}
 */
 
    return (
        <div className="App">
            <Btn txt="Authorize" onClick={authorizeOnClick}/>
        </div>
    )
}

export default DestinyOAUTH
