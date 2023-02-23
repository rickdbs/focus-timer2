export default function Controls({
    countDown,
    countDownOn,
    resetTimer,
    minutesDisplay,
    secondsDisplay

}){

    function PlayAndAntiRepeatTimerExecution(){
        if(countDownOn == false){
            resetTimer = false
            countDown()
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
        resetTimerDisplay
    }
}