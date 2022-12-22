import React from 'react'
import "./intro.css"

import {useRef, useEffect} from 'react';
import { useState } from 'react';


const Intro = (props) => {
  const lastTextRef = useRef();

  const [startIsPossible, setStartIsPossible] = useState(false)





  useEffect(() => {
    lastTextRef.current.addEventListener('animationend', () => {  
      setStartIsPossible(true)
    });
  })

  function clickToStart(){
    if(startIsPossible){
      props.scenName("quiz")
    }
  }

  
  return (
    <div className='intro' onClick={clickToStart}>
        <div className='intro-preload'>

            <div className="intro-bck-image"></div>
            
            <p className='intro-txt text-show-animation'> This is a marvelous app, where you find out your future </p>
            <p className='intro-txt text-show-animation-2 intro-txt-2'> So, please approach this carefully </p>
            <p ref={lastTextRef} className='intro-txt text-show-animation-3 intro-txt-3'> Soon you will know what awaits you in your life </p>
            {startIsPossible ? 
            <p className='intro-txt intro-bottom-txt flashing-animation'> touch the screen to start</p>    
            : 
            null } 
            
        </div>
    </div>
  )
}

export default Intro