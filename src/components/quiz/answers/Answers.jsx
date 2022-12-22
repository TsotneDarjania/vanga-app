import React, { useState } from 'react'
import { useEffect } from 'react'
import "./answers.css"

const Answers = (props) => {


  let [zodiac,setZodiac] = useState("")
  let [answerClass,setAnswerClass] = useState("")

  getZodiac();

  function getZodiac(){
    if(zodiac.length < 3){
      for (let i = 0; i < props.answers[0].length; i++) {
        if(props.answers[0][i] === "_") return;
        setZodiac(zodiac += props.answers[0][i])
      }
    }
  }

  return (
    <div className='answers'>
        <p className="answer-text answer-text-1"> well well well, 
        now you will see way of your life, are you ready ?
        </p>
        <button onClick={() => { setAnswerClass("show") }} className="continue-answer-btn">of course</button>

        <div className={"answers-container " + answerClass} >
          <div className="answer-container-text"> you are { zodiac }</div>
          <div className="answer-container-text">
            You will go on the {props.answers[1]} side of the road
          </div>
          <div className="answer-container-text">
            You will suddenly fall asleep and have a dream related to {props.answers[2]} 
           </div>
          <div className="answer-container-text">
            In a dream, you will see a talking {props.answers[3]}  going to the store 
           </div>
          <div className="answer-container-text">
            At this time, light will appear, which consists of {props.answers[4]}
           </div>
          <div className="answer-container-text">
            {props.answers[5]} hours later you will wake up
           </div>
          <div className="answer-container-text">
            Then Emma Watson will call you and ask you, what are you going to do today? you answer
            "{props.answers[6]}"
           </div>
          <div className="answer-container-text">
            Then he will say to you "I invite you to my house for cool {props.answers[7]} this evening, will you come?"
           </div>
          <div className="answer-container-text">
            You will be the answer {props.answers[8]}
           </div>
           
        </div>
    </div>
  )
}

export default Answers