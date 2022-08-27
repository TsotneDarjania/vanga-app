import "./quizQuestions.css"
import { useState } from "react"
import Calendar from "../components/Calendar"


import React from 'react'

const QuizQuestions = () => {

const [questionIndex, setQuestionIndex] = useState(1)
const [day, setDay] = useState(undefined)

const [birthDayIsSelected, setBirthDayIsSelected] = useState(false)




  return (
    <div className="quiz-questions">
       
        { questionIndex === 1 ?
        <div className="question-raw">
            <p className="question-txt"> When is the month and number of your birthday ? </p>
            <Calendar day={setDay} isSelected={setBirthDayIsSelected}/>
            {
                birthDayIsSelected ? <button className="question-next-btn"> Continue </button> : null
            }
        </div>
         :
         null
        }

       


    </div>
  )
}

export default QuizQuestions;