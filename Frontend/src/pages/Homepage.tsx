import React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Header from '../components/Header';
import Selector from '../components/Selector';
import Cards from '../components/Cards';

import DestinyOAUTH from '../pages/DestinyOAUTH';
import RestAPIScript from '../pages/RestAPIScript';


const Homepage = () => {

    const [link, setLink] = useState(3);
  const [field, setField] = useState(<></>);

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
    proj.classList.add("fadeOut")
  }
  if(exp != null){
    //exp.classList.add("fadeIn")
  }*/
}

const showCardInfo = () => {
  console.log("you pressed a card, wow!");
}


//buttons on click
const firstbtnonclick = () => {
  setField(<DestinyOAUTH/>);
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
}]

const [pressed, setPressed] = useState(false);


return (
    <div className="App">
        <div style={ pressed ? {transition: 100+"ms", opacity: 0} : {}}>
            <Header txt="Projector.io"/>
            <Selector txtbtn1="Show programs" txtbtn2="Show explanations" func1={showPrograms} func2={showExplanations} link={link}/>
            <div>
              <CSSTransition in={link === 3} timeout={500} classNames="menu-proj">
                <Cards link={link} styles="proj" setPressed={setPressed} cards={cards} />
              </CSSTransition>

              <CSSTransition in={link === 6} timeout={500} classNames="menu-exp">
                <Cards link={link} styles="exp" setPressed={setPressed} cards={explanations} />
              </CSSTransition>
            </div>
        </div>
    </div>
)
}

export default Homepage
