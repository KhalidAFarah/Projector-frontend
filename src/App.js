//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Selector from './components/Selector';
import Cards from './components/Cards';

//First selector
const showPrograms = () =>{
  console.log("Hello showing programs");
}

//Second selector
const showExplanations = () =>{
  console.log("Hello showing explanations");
}

const showCardInfo = () => {
  console.log("you pressed a card, wow!")
}
const cards = [{
  img: "./testimage.PNG",
  title: "LOREM IPSUM",
  txt: "Lorem Ipsum. Lorem Ipsum",
  clickfunc: showCardInfo,
}]

function App() {
  return (
    <div className="App">
      <Header txt="Projector.io"/>
      <Selector txtbtn1="Show programs" txtbtn2="Show explanations" func1={showPrograms} func2={showExplanations}/>

      <Cards cards={cards}

      />

      
      
    </div>
  );
}

export default App;
