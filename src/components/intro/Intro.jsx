import React from 'react'
import "./intro.css"

import {useRef, useEffect} from 'react';
import { useState } from 'react';

const Intro = () => {

  const [startIsPossible, setStartIsPossible] = useState(false);


  const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('start is possible');
      setStartIsPossible(true)
    };

    const e = ref.current;

    e.addEventListener('animationend', handleClick);

    return () => {
      e.removeEventListener('animationend', handleClick);
    };
  }, []);



  
  return (
    <div className='intro'>
        <div className='intro-preload'>
            <p className='intro-txt text-show-animation'> This is a marvelous app, where you find out your future </p>
            <p className='intro-txt text-show-animation-2 intro-txt-2'> So, please approach this carefully </p>
            <p ref={ref} className='intro-txt text-show-animation-3 intro-txt-3'> Soon you will know what awaits you in your life </p>
            {startIsPossible ? 
            <p className='intro-txt intro-bottom-txt flashing-animation'> touch the screen to start</p>    
            : 
            null }
            
        </div>
    </div>
  )
}

export default Intro