//import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Selector from './components/Selector';
import Cards from './components/Cards';
import Btncomponent from './components/newpage/Btncomponent';
import RestAPIScript from './components/newpage/RestAPIScript';





function App() {

  const [link, setLink] = useState(3);
  const [field, setField] = useState(<></>);

//First selector
const showPrograms = () =>{
  console.log("Hello showing programs");
  setLink(3);
}

//Second selector
const showExplanations = () =>{
  console.log("Hello showing explanations");
  setLink(6);
}

const showCardInfo = () => {
  console.log("you pressed a card, wow!");
}


//buttons on click
const firstbtnonclick = () => {
  setField(<Btncomponent txt="Test tekst"/>);
}
const RestAPIScript = () => {
  //setField(<RestAPIScript/>);

}
const cards = [{
  img: "testimage.PNG",
  title: "LOREM IPSUM",
  txt: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  clickfunc: firstbtnonclick,
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

      
{pressed ? field : <div style={ pressed ? {transition: 100+"ms", opacity: 0} : {}}>
      <Header txt="Projector.io"/>
        <Selector txtbtn1="Show programs" txtbtn2="Show explanations" func1={showPrograms} func2={showExplanations} link={link}/>

        <Cards link={link} class="proj" setPressed={setPressed} cards={cards} />
        <Cards link={link} class="exp" setPressed={setPressed} cards={explanations} />

        

      
      </div>}

       

      

      
      
    </div>
  );
}

export default App;
