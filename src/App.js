import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';

import { useState } from 'react';
import Quiz from './components/quiz/Quiz';

function App() {

  let state = {
    startIsPossible : false
  }

  const [scenName, setScenName] = useState("quiz");



  return (
    <div className="App">

      {scenName === "intro" ?
      <Intro scenName={setScenName} /> 
      :
      null}

      {scenName === "quiz" ?
      <Quiz />
      :
      null}

    </div>
  );
}

export default App;
