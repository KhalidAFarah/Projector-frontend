//import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Selector from './components/Selector';
import Cards from './components/Cards';




function App() {

  const [link, setLink] = useState(3);

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
const cards = [{
  img: "testimage.PNG",
  title: "LOREM IPSUM",
  txt: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  clickfunc: showCardInfo,
},{
  img: "./testimage.PNG",
  title: "LOREM IPSUM",
  txt: "Lorem Ipsum. Lorem Ipsum",
  clickfunc: showCardInfo,
},{
  img: "./testimage.PNG",
  title: "LOREM IPSUM",
  txt: "Lorem Ipsum. Lorem Ipsum",
  clickfunc: showCardInfo,
},{
  img: "./testimage.PNG",
  title: "LOREM IPSUM",
  txt: "Lorem Ipsum. Lorem Ipsum",
  clickfunc: showCardInfo,
}]




  return (
    <div className="App">
      <Header txt="Projector.io"/>
      <Selector txtbtn1="Show programs" txtbtn2="Show explanations" func1={showPrograms} func2={showExplanations} link={link}/>

      <Cards cards={cards}

      />

      
      
    </div>
  );
}

export default App;
