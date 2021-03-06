import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

//pages
import Homepage from './pages/Homepage';
import DestinyOAUTH from './pages/DestinyOAUTH';
import RestAPIScript from './pages/RestAPIScript';
import YoutubeTitleCountdown from './pages/YoutubeTitleCountdown';

function App() {

  
  return (
    <Router>
      <Route path="/" exact component={Homepage}/>
      <Route path="/destinyoauth" component={DestinyOAUTH} />
      <Route path="/ytcountdown" component={YoutubeTitleCountdown} />
      <Route path="/restapiscript" component={RestAPIScript} />
    </Router>
  );
}

export default App;
