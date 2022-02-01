import TextHeader from "../components/TextHeader"
import Text from "../components/Text"
import Video from "../components/Video"
import BtnReturn from "../components/BtnReturn"

const RestAPIScript = (props:any) => {
    return (
        <>
        <BtnReturn />
        <div className="App container" style={{color:"white", textAlign:"start", fontSize: "2rem"}}>
            
            <Video src="https://www.youtube.com/embed/UQzsl7bUg5U" classes=""/>
            <TextHeader txt="Intro:" classes="txt-color"/>
            <Text txt="How does Destiny load in your items or those random people in your facinity standing there AFK. How does blitz.gg even when shut off keep track of my headshot percentage in Valorant like i gotta keep to yourself. So how do they do it? Well with a little something called REST API"/>
            <TextHeader txt="Explanation:" classes="txt-color"/>
            <Text txt="What is REST API, well REST API is an API resting on a server, which an external program can communicate with, through links. These links can vary with not only its content, but also its request methods such as “GET”, “POST”, “PUT”, “DELETE”. Just by searching on the internet you by default use the “GET” request method. These methods all do the same, however they all play apart when handling the backend for API servers such as bungies, which we will go into detail later.
                So how do we use API, well API can vary from the service that you use but for this video we will us bungies api, and the best way to start is with “http://destinydevs.github.io/BungieNetPlatform/docs/Getting-Started“. This website gives a basic tutorial how to get started with different programming languages. And “https://bungie-net.github.io/multi/index.html” is another site which has a list of many of bungie endpoint which are the links we will be using. The page also shows us what request method to use as bungies API will interpret same endpoints with different request methods differently and so return different info mostly relevant to the request method for example the “POST” request would post something to the server like you equipping a different armor piece or weapon.
                (skit of hitting up bungie and separating into what the request is method, the root API (https://www.bungie.net/Platform) and the endpoint. Along the lines of “Bungie give me my Le Monarche”, give  would then signify the request method “GET”  and “Bungie” the root api, and “my Le monarque” would be the endpoint)" />

            <Text txt="This part is more specifically directed at Destiny’s API, where we will speak about how bungie send you the responses.
                To start off bungie knows what they’re making. They’re making a multiplayer game and so good internet connectivity is important, and when so many things such as other items needed to be loaded in and out. And so, the less packets they have to send over the network the better the average connectivity will be. they do this through they’re manifest file and components.
                Components first of all are numbers that you send as queries in then endpoint this means that if the game need a lot of data about a certain item it can attain it but it can also acquire the minimal data for the object meaning less packages sent the player. We can these requests happen when you *cough *cough have bad internet and people are still loading."/>

            <Text txt="This part is more so due to performance, for the fact that the if all static data about an item would be fetched from bungie’s server not only would take a long time for all those request to go through and not to mention the packets. Therefore, for optimization all items, stats, perks and etc. in Destiny that have static data that does not change unless bungies themselves changes it. Are stored in an sqlite database file that the game uses and other websites such as DIM. This file stores data in json format and has several tables such as “DestinyInventoryItemDefinition” or “DestinyStatDefinition” and so on. this is further explained by Allynh who explain the huge pro of something like this. 
                (Show ER-diagram (this diagram does not represent how bungie database looks like, and probably better than what I drew here.))" />

            <TextHeader txt="Code part:" classes="txt-color"/>
            <Text txt="So… enough talking how do we use such extravagant technology, for this example we will be using bungies API but most differ partly. How do we actually use it, well to get started we need to get an API key to communicate with bungie servers. This phenomenon is mostly due to the fact that bungie don’t want people to burn their servers by doing to many request at any moment in time. To get the API we will have to head over to bungies developer portal, from there we can create an app and call what we want. We then gather the API key and set the origin header as * as it sometimes can cause problems.
                Now its time to do the coding, where in this example am doing it with python flask backend and then native HTML/CSS/JS as the frontend. From there I use these endpoints to get information about my bungie account all the way till my character and their weapons and items along with their stats and perks we can then route this the front end and can from their look the following." />

            <TextHeader txt="Outro:" classes="txt-color"/>
            <Text txt="In this case of course we’re not using OAuth2 of course which means that we don’t have permission for certain transaction such as moving weapons in player inventories, which thank cyber security for that wouldn’t want a random guy grieving me mid game.
                And last but not least, if you enjoyed this the like the video if you believe that the video was terrible dislike, if you want to see more videos like this one hit the subscribe button, and the bell next to. Feedback at the moment for this video is very important as it may determine where I will continue. And here’s the video that i said, i was going to make." />

            <TextHeader txt="Sources:" classes="txt-color"/>
            <Text txt="https://bungie-net.github.io/multi/index.html (list of endpoints)" />
            <Text txt="https://bungie-net.github.io/multi/schema_Destiny-DestinyComponentType.html (the diferent component numbers)" />
            <Text txt="http://allynh.com/blog/creating-a-python-app-for-destiny-part-5-reading-a-characters-inventory-and-vault-contents/ (i later figured out that this site does not have a certificate and does not encrypt transmission so browse at your own risk!)" />
            <Text txt="http://destinydevs.github.io/BungieNetPlatform/docs/Getting-Started (same goes for  here)" />

        </div>
        </>
    )
}

export default RestAPIScript
