import Timer from "./timer.js"

const timer = Timer({})

import {
    btnPlay,
    btnStop,
    btnPlus,
    btnLess,
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFireplace,
} from "./elements.js"


export default function Events({
    controls,
    timer,
    sounds,
}){

    btnPlay.addEventListener('click', function(){

        controls.PlayAndAntiRepeatTimerExecution()
        
    })
    
    btnStop.addEventListener('click', function(){
    
        controls.resetTimerDisplay()
        
    })
    
    btnPlus.addEventListener('click', function(){
        
        timer.addMoreTime()
    })
    
    btnLess.addEventListener('click', function(){
        
        timer.decreaseTime()
    
    })
    
    btnForest.addEventListener('click', function(){
        controls.soundButtonsOnOff(btnForest)
        sounds.audioForestOn()

        
    })
    
    btnRain.addEventListener('click', function(){
        controls.soundButtonsOnOff(btnRain)
        sounds.audioRainOn()
    })
    
    btnCoffeeShop.addEventListener('click', function(){
        controls.soundButtonsOnOff(btnCoffeeShop)
        sounds.audioCoffeShopOn()
    })
    
    btnFireplace.addEventListener('click', function(){
        controls.soundButtonsOnOff(btnFireplace)
        sounds.audioFireplaceOn()
    })
    
}