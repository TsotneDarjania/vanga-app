import "./quizQuestions.css"
import { useState } from "react"
import Calendar from "../calendar/Calendar"


import React from 'react'

const answers = [];

const QuizQuestions = (props) => {

const [questionIndex, setQuestionIndex] = useState(1)
const [day, setDay] = useState(undefined)



const [birthDayIsSelected, setBirthDayIsSelected] = useState(false)

  function nextQuestion(answer){
    setQuestionIndex(questionIndex + 1);

    if(questionIndex === 2){
      answers[0] = day;
    }

    answers.push(answer)

    if(questionIndex === 9){
      props.answers(answers)
      props.quizState(6)
    }

  }


  return (
    <div className="quiz-questions">
       
        { questionIndex === 1 &&
        <div className="question-raw">
            <p className="question-txt"> When is the month and number of your birthday ? </p>
            <Calendar day={setDay} isSelected={setBirthDayIsSelected}/>
            {
                birthDayIsSelected ? <button onClick={ () => {nextQuestion("none")}} className="question-next-btn"> Continue </button> : null
            }
        </div>
        }
        { questionIndex === 2 &&
          <div className="question-raw">
            <p className="question-txt"> right or left? </p>
            <button onClick={ ()=> {nextQuestion("right")}} className="answer-btn"> right </button>
            <button onClick={ ()=> {nextQuestion("left")}} className="answer-btn"> left </button>
          </div>  
        } 
        { questionIndex === 3 &&
          <div className="question-raw">
            <p className="question-txt"> What kind of dream did you see last time? </p>
            <button onClick={ ()=> {nextQuestion("nightmare")}} className="answer-btn"> nightmare </button>
            <button onClick={ ()=> {nextQuestion("adventure")}} className="answer-btn"> adventure </button>
            <button onClick={ ()=> {nextQuestion("erotic")}} className="answer-btn"> erotic </button>
            <button onClick={ ()=> {nextQuestion("other")}} className="answer-btn"> other </button>
          </div>  
        } 
        { questionIndex === 4 &&
          <div className="question-raw">
            <p className="question-txt">Dogs or cats? </p>
            <button onClick={ ()=> {nextQuestion("dogs")}} className="answer-btn"> dogs </button>
            <button onClick={ ()=> {nextQuestion("cats")}} className="answer-btn"> cats </button>
            <button onClick={ ()=> {nextQuestion("no_one")}} className="answer-btn"> no one </button>
          </div>  
        } 
        { questionIndex === 5 &&
          <div className="question-raw">
            <p className="question-txt">Is light a particle or a wave? </p>
            <button onClick={ ()=> {nextQuestion("particle")}} className="answer-btn"> particle </button>
            <button onClick={ ()=> {nextQuestion("wave")}} className="answer-btn"> wave </button>
            <button onClick={ ()=> {nextQuestion("no one")}} className="answer-btn"> no one </button>
            <button onClick={ ()=> {nextQuestion("both")}} className="answer-btn"> both </button>
          </div>  
        } 
        { questionIndex === 6 &&
          <div className="question-raw">
            <p className="question-txt">How many people would you call true friend around you? </p>
            <button onClick={ ()=> {nextQuestion("1")}} className="answer-btn"> 1 </button>
            <button onClick={ ()=> {nextQuestion("2")}} className="answer-btn"> 2 </button>
            <button onClick={ ()=> {nextQuestion("3")}} className="answer-btn"> 3 </button>
            <button onClick={ ()=> {nextQuestion("more")}} className="answer-btn"> more </button>
          </div>  
        } 
        { questionIndex === 7 &&
          <div className="question-raw">
            <p className="question-txt">What will you do if you find out that an asteroid with a radius of 30 km will hit the earth tomorrow? </p>
            <button onClick={ ()=> {nextQuestion("I will have sex all_day")}} className="answer-btn"> I will have sex all day </button>
            <button onClick={ ()=> {nextQuestion("I will drink_all day")}} className="answer-btn"> I will drink all day </button>
            <button onClick={ ()=> {nextQuestion("I will have fun all day")}} className="answer-btn"> I will have fun all day </button>
            <button onClick={ ()=> {nextQuestion("i dont now")}} className="answer-btn"> i dont now </button>
          </div>  
        } 
        { questionIndex === 8 &&
          <div className="question-raw">
            <p className="question-txt">Coca-Cola or Pepsi?</p>
            <button onClick={ ()=> {nextQuestion("coca cola")}} className="answer-btn"> Coca-Cola </button>
            <button onClick={ ()=> {nextQuestion("pepsi")}} className="answer-btn">Pepsi</button>
            <button onClick={ ()=> {nextQuestion("water")}} className="answer-btn"> water </button>
            <button onClick={ ()=> {nextQuestion("wine")}} className="answer-btn"> wine  </button>
          </div>  
        } 
        { questionIndex === 9 &&
          <div className="question-raw">
            <p className="question-txt"> Do you believe that aliens exist? </p>
            <button onClick={ ()=> {nextQuestion("yes")}} className="answer-btn"> yes </button>
            <button onClick={ ()=> {nextQuestion("no")}} className="answer-btn">no</button>
          </div>  
        } 
    </div>
  )
}

export default QuizQuestions;