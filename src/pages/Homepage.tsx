import React, { SyntheticEvent } from 'react';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import Header from '../components/Header';
import Selector from '../components/Selector';
import Cards from '../components/Cards';

import DestinyOAUTH from '../pages/DestinyOAUTH';
import RestAPIScript from '../pages/RestAPIScript';


const Homepage = () => {

  const [link, setLink] = useState(3);
  const [active ,setActive] = useState(false);

  

  useEffect(() => {
    (async () => {
      const response = await fetch("https://proteje.herokuapp.com/api/sup/", {
        method: 'GET',
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':"*"
          
        }
      }).then(response => {
        console.log("sd")
        if(response.ok){
          
          return response.json();
        }
        throw response
        
      }).then(data => {
        console.log(data);
      }).catch( error => {
        console.log("Unable to fecth from backend");
      })
      
    })()
  }, []);
  ;

//First selector
const showPrograms = () =>{
  console.log("Hello showing programs");
  setLink(3);
}

//Second selector
const showExplanations = () =>{
  
  setLink(6);
  /*const proj = document.querySelector(".proj");
  const exp = document.querySelector(".exp");
  
  
  if(proj != null){
    proj.classList.add("slide")
  }
  if(exp != null){
    exp.classList.add("slide")
  }*/
}



const showCardInfo = () => {
  console.log("you pressed a card, wow!");
}


//buttons on click
const firstbtnonclick = () => {
  //setField(<DestinyOAUTH/>);
}
const RestAPIScript = () => {
  //setField(<RestAPIScript/>);

}
const cards = [{
  img: "testimage.PNG",
  title: "LOREM IPSUM",
  txt: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  clickfunc: firstbtnonclick,
  link: "/destinyoauth"
}]
const explanations = [{
  img: "testimage.PNG",
  title: "Rest API",
  txt: "The following is about Rest API with destiny 2 as an example.",
  clickfunc: RestAPIScript,
  link: "restapiscript"
}]

const [pressed, setPressed] = useState(false);


return (
    <div className="App">
        <div style={ pressed ? {transition: 100+"ms", opacity: 0,overflow:""} : {}}>
            <Header txt="Proteje.netlify.app"/>
            <Selector txtbtn1="Show programs" txtbtn2="Show explanations" func1={showPrograms} func2={showExplanations} link={link}/>
            <div style={{overflow:"hidden"}}>
              
                <Cards link={link} styles="proj" style={link == 3 ? {transform: "translateX(0%)"} : {transform: "translateX(-100%)"}} setPressed={setPressed} cards={cards} />
                <Cards link={link} styles="exp" style={link == 3 ? {transform: "translateX(100%)"} : {transform: "translateX(0%)"}} setPressed={setPressed} cards={explanations} />
              
            </div>
        </div>
    </div>
)
}

export default Homepage
