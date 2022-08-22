import Btn from "../components/Button"
import { useEffect, useState} from "react"
import { Builds } from "../components/Destiny"
//import { Buttton } from "react-bootstrap/button";
const DestinyOAUTH = (props:any) => {
    const [builds, setBuilds] = useState({})
    
    const authorizeOnClick = () => {
        window.location.href = "https://www.bungie.net/en/OAuth/Authorize?client_id=39222&response_type=code"
    }

    useEffect(() => {
        (async () => {
            
            await fetch("http://localhost:9200/api/destiny/builds/").then((response)=>{
                if(response.ok){
                    return response.json()
                } throw response
            }).then(data => {
                setBuilds(data)
            }).catch((error) => {
                console.log(error)
            })

            const code = window.location.search.replace("?code=", "");

            if(code != "") {
                const info = {
                    'client_id': '39222',
                    'grant_type': 'authorization_code',
                    'code' : code
                }

                await fetch("https://www.bungie.net/Platform/App/OAuth/Token/", {
                    method: 'POST',
                    headers: {'Content-Type':'application/x-www-form-urlencoded'},
                    body: new URLSearchParams(info)
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
            <Builds builds={builds}/>
        </div>
    )
}

export default DestinyOAUTH
