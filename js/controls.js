import { minutesDisplay, secondsDisplay } from "./elements.js"
import Timer from "./timer.js"

let resetTimer = false

const timer = Timer({})
export default function Controls({
    countDownOn
}){


    function PlayAndAntiRepeatTimerExecution(){
        if(countDownOn == false){

            resetTimer = false
            timer.countDown()
            countDownOn = true
        }

        else{
            return
        }
    }


    function soundButtonsOnOff(btn){
        btn.classList.toggle('selected')
    }

    function resetTimerDisplay(){
        resetTimer = true
        minutesDisplay.textContent = String(25).padStart(2, "0")
        secondsDisplay.textContent = String(0).padStart(2, "0")
        countDownOn = false

    }

    return{
        PlayAndAntiRepeatTimerExecution,
        soundButtonsOnOff,
        resetTimerDisplay,
    }

    
}

export{
    resetTimer,
}