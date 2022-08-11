import './App.css';
import Intro from './components/intro/Intro';

import { useState } from 'react';
import Quiz from './components/quiz/Quiz';

function App() {


  const [scenName, setScenName] = useState("intro");



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
