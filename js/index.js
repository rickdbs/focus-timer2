import Controls from "./controls.js"
import { resetTimer } from "./controls.js"


import {
    btnPlay,
    btnStop,
    btnPlus,
    btnLess,
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFireplace,
    minutesDisplay,
    secondsDisplay,
    countDownOn,
} from "./elements.js"


const controls = Controls({
    countDown,
    countDownOn,
    minutesDisplay,
    secondsDisplay
})



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
        

        if(resetTimer == true){
            
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

btnPlay.addEventListener('click', function(){

    controls.PlayAndAntiRepeatTimerExecution()
    
})

btnStop.addEventListener('click', function(){

    controls.resetTimerDisplay()
    
})

btnPlus.addEventListener('click', function(){
    
    addMoreTime()
})

btnLess.addEventListener('click', function(){
    
    decreaseTime()

})


btnForest.addEventListener('click', function(){
    controls.soundButtonsOnOff(btnForest)
})

btnRain.addEventListener('click', function(){
    controls.soundButtonsOnOff(btnRain)
})

btnCoffeeShop.addEventListener('click', function(){
    controls.soundButtonsOnOff(btnCoffeeShop)
})

btnFireplace.addEventListener('click', function(){
    controls.soundButtonsOnOff(btnFireplace)
})

export{
    resetTimer
}