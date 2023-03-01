import { minutesDisplay, secondsDisplay } from "./elements.js"
import { resetTimer } from "./controls.js"
import Controls from "./controls.js"

const controls = Controls({})

export default function Timer({
}){
    
    function addMoreTime(){
        minutesDisplay.textContent = Number(minutesDisplay.innerText) + 5
    
        minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
    }
    
    function decreaseTime(){
    
        minutesDisplay.textContent = Number(minutesDisplay.innerText) - 5
        
        minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
    }
    
    function countDown(){
    
        setTimeout(function(){
            
            let minutes = Number(minutesDisplay.textContent) 
            let seconds = Number(secondsDisplay.textContent) 
            let isFinished = (minutes <= 0 && seconds == 0)
            
    
            if(resetTimer == true || isFinished){
                controls.resetTimerDisplay()
                return
    
            }
            
            if(seconds <= 0){
                seconds = 60
                minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
            }
            
            secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
            
            countDown()
            
        }, 1000)
        
        
        
        
    }

    return{
        addMoreTime,
        decreaseTime,
        countDown
    }

    
}