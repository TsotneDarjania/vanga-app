import React from 'react'
import Vanga from "../../img/future_telling_women.png"
import Arrow from '../../img/arrow.png'

import {useRef,useEffect, useState } from 'react';

import "./quiz.css";

const Quiz = () => {

  const vangaAnimationRef = useRef();
  const [quizState, setQuizState] = useState(0);
  const [quizClassName, setQuizClassName] = useState(null)

  useEffect( () => {
    if(quizState === 0){
      setQuizState(quizState + 1)
    }
    if(quizState == 5){
      setQuizClassName("quiz-2")
    }
    
    if(vangaAnimationRef.current != undefined){

      vangaAnimationRef?.current.addEventListener("animationend", () => {
        if(quizState != 4){
          setQuizState(quizState + 1)
       }
      })

    }

  })


  return (
    <div className={'quiz ' + quizClassName}>

      {
      quizState === 0 ?
      <div>
        <img className='vanga-img' src={Vanga} alt="" />
      </div>
      :
      quizState === 1 ?
      <div>
        <img className='vanga-img vanga-img-anim-1' src={Vanga} alt="" />
      </div>
      :
      quizState === 2 ?
      <div>
        <img className='vanga-img vanga-img-anim-2' src={Vanga} alt="" />
      </div>
      :
      quizState === 3 ?
      <div>
        <img className='vanga-img vanga-img-anim-3' src={Vanga} alt="" />
      </div>
      :
      quizState === 4 ?
      <div>
        <img className='vanga-img vanga-img-anim-4' src={Vanga} alt="" />
      </div>
      :
      quizState === 5 ?
      <div>
        <img className='vanga-img vanga-img-anim-5' src={Vanga} alt="" />
        <div className='hr'> </div>
      </div>
      :
      <div>
        <img className='vanga-img vanga-img-anim-5' src={Vanga} alt="" />
      </div>
      
      }


      <div className="quizz-intro">
        <div className='quiz-intro-txts'>
          { quizState === 1 ?    
            <div>
              <p className='quizz-intro-txt'> <span ref={vangaAnimationRef} id="asd" className='light'> </span>  I am Inga </p>
              <img onClick={() => {setQuizState(quizState + 1)}} className='arrow next-arrow' src={Arrow} alt="arrow" />
            </div>
            :            
            <p className='quizz-intro-txt'> </p>   
          }
          { quizState === 2 ? 
            <div>
              <p className='quizz-intro-txt'> <span ref={vangaAnimationRef} className='light'> </span> I can understand everything about you </p>
              <img onClick={() => {setQuizState(quizState + 1)}} className='arrow next-arrow' src={Arrow} alt="arrow" />
              <img onClick={() => {setQuizState(quizState - 1)}} className='arrow previous-arrow' src={Arrow} alt="arrow" />
            </div>
            :
            <p className='quizz-intro-txt'>  </p>
          }
          { quizState === 3 ? 
            <div>
              <p className='quizz-intro-txt'> <span ref={vangaAnimationRef} className='light'> </span> I will see your future which is inevitable </p>
              <img onClick={() => {setQuizState(quizState + 1)}} className='arrow next-arrow' src={Arrow} alt="arrow" />
              <img onClick={() => {setQuizState(quizState - 1)}} className='arrow previous-arrow' src={Arrow} alt="arrow" />
            </div>   
            :
            <p className='quizz-intro-txt'> </p>
          }
          { quizState === 4 ?   
           <div className='last-quiz-intro-div'>
              <p className='quizz-intro-txt'> <span ref={vangaAnimationRef} className='light'> </span> be careful and follow my instructions </p>
              <img onClick={() => {setQuizState(quizState - 1)}} className='arrow previous-arrow' src={Arrow} alt="arrow" />
              <button className='quizz-intro-next-btn' onClick={() => {setQuizState(quizState + 1)}}> ok, please continue </button>
            </div>  
            :
            <p className='quizz-intro-txt'> </p>
          }
          
        </div>

      </div>
    </div>
  )
}

export default Quiz