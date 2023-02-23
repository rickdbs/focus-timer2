import Controls from "./controls.js"

const btnPlay = document.querySelector(".play")
const btnStop = document.querySelector(".stop")
const btnPlus = document.querySelector(".time-plus")
const btnLess = document.querySelector(".time-less")
const btnForest = document.querySelector(".forest")
const btnRain = document.querySelector(".rain")
const btnCoffeeShop = document.querySelector(".coffee-shop")
const btnFireplace = document.querySelector(".fireplace")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let countDownOn = false
let resetTimer = false

const controls = Controls({
    countDown,
    countDownOn,
    resetTimer,
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
        
        if(minutes <= 0 || resetTimer == true){
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
    soundButtonsOnOff(btnForest)
})

btnRain.addEventListener('click', function(){
    soundButtonsOnOff(btnRain)
})

btnCoffeeShop.addEventListener('click', function(){
    soundButtonsOnOff(btnCoffeeShop)
})

btnFireplace.addEventListener('click', function(){
    soundButtonsOnOff(btnFireplace)
})