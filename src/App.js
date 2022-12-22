import './App.css';
import Intro from './components/intro/Intro';

import { useState } from 'react';
import Quiz from './components/quiz/Quiz';

function App() {

  const [scenName, setScenName] = useState("quiz");

  return (
    <div className="App">

      {scenName === "intro" && <Intro scenName={setScenName} /> }

      {scenName === "quiz" && <Quiz /> }

    </div>
  );
}

export default App;
