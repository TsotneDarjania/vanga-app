import React from 'react'
import { useState } from 'react'
import "./calendar.css"


const Calendar = () => {

    const [monthIndicator, setMonthIndicator] = useState(0)

    const monthsNames = {
        0 : "January",
        1 : "February",
        2 : "March",
        3 : "April",
        4 : "May",
        5 : "June",
        6 : "July",
        7 : "August",
        8 : "Semtember",
        9 : "Octomber",
        10 : "November",
        11 : "December"
    }

    function changeMonth(symbol) {
        if(symbol === "+"){
            if(monthIndicator < 11){
                setMonthIndicator(monthIndicator + 1)
                return;
            }
            if(monthIndicator === 11){
                setMonthIndicator(0);
            }
        }
        if(symbol === "-"){
            if(monthIndicator > 0){
                setMonthIndicator(monthIndicator - 1)
                return;
            }
            if(monthIndicator === 0){
                setMonthIndicator(11)
            }        
        }
    }

    const getMonthDaysContent = month => {
     
        let content = [];

        for (let i = 0; i < month.days_number; i++) {
            if(month.zodiacDays[i] != "none"){
                content.push(<div key={i} id={"day_"+i} className={"calendar-number "+month.zodiacDays[i]}> {<p> {i+1} </p>} </div>);
            }
            else {
                content.push(<div key={i} id={"day_"+i} className="calendar-number"> {<p> {i+1} </p>} </div>);
            }   
        }                  
        return content;
    };

    class Month {
        constructor(days_number){
            this.days_number = days_number;
            this.zodiacDays = [];
            this.init();
        }

        init(){
            //create empty array
            for (let i = 0; i < this.days_number+1; i++) {
                this.zodiacDays.push('none');
            }
        }

        setZodiacDate({zodiacName,from, to}){
            for (let i = 0; i < this.zodiacDays.length; i++) {
                if(i >= from && i < to) {
                    this.zodiacDays[i-1] = zodiacName;     
                }  
            }
        }
    }

    let january = new Month(31)
    january.setZodiacDate({zodiacName : "capricorn",from : 1, to : 20})
    january.setZodiacDate({zodiacName : "aquarius",from : 20, to : 32})


    let february = new Month(29)
    february.setZodiacDate({zodiacName : "aquarius",from : 1, to : 18})
    february.setZodiacDate({zodiacName : "pisces",from : 18, to : 32})


    let march = new Month(31)
    march.setZodiacDate({zodiacName : "pisces",from : 1, to : 20})
    march.setZodiacDate({zodiacName : "aries",from : 20, to : 32})


    let april = new Month(30)
    april.setZodiacDate({zodiacName : "aries",from : 1, to : 20})
    april.setZodiacDate({zodiacName : "taurus",from : 20, to : 32})


    let may = new Month(31)
    may.setZodiacDate({zodiacName : "taurus",from : 1, to : 21})
    may.setZodiacDate({zodiacName : "gemini",from : 21, to : 32})


    let june = new Month(30)
    june.setZodiacDate({zodiacName : "gemini",from : 1, to : 21})
    june.setZodiacDate({zodiacName : "cancer",from : 21, to : 32})


    let july = new Month(31)
    july.setZodiacDate({zodiacName : "cancer",from : 1, to : 23})
    july.setZodiacDate({zodiacName : "leo",from : 23, to : 32})


    let august = new Month(31)
    august.setZodiacDate({zodiacName : "leo",from : 1, to : 23})
    august.setZodiacDate({zodiacName : "virgo",from : 23, to : 32})


    let september = new Month(30)
    september.setZodiacDate({zodiacName : "virgo",from : 1, to : 23})
    september.setZodiacDate({zodiacName : "libra",from : 23, to : 32})


    let october = new Month(31)
    october.setZodiacDate({zodiacName : "libra",from : 1, to : 23})
    october.setZodiacDate({zodiacName : "scorpio",from : 23, to : 32})

    let november = new Month(30)
    november.setZodiacDate({zodiacName : "scorpio",from : 1, to : 22})
    november.setZodiacDate({zodiacName : "sagittarius",from : 22, to : 32})


    let december = new Month(31)
    december.setZodiacDate({zodiacName : "sagittarius",from : 1, to : 22})
    december.setZodiacDate({zodiacName : "capricorn",from :22, to : 32})

    let months = [january,february,march,april,may,june,july,august,september,
    october,november,december]

    


  return (
    <div id="calendar">  
        <div className="month-container"> 
            <div className="month-btn" onClick={ () => changeMonth("-")}> &#60; </div>
            <p className="month-text"> {monthsNames[monthIndicator]} </p>
            <div className="month-btn" onClick={ () => changeMonth("+")}>  &#62; </div>
            {
                 
            }
        </div>
        {
            getMonthDaysContent(months[monthIndicator])   
        }    
    </div>
  )
}

export default Calendar