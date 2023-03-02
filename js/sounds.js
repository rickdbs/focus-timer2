let isOn = false
const soundForest = new Audio("./sounds/Floresta.wav")
const soundRain = new Audio("./sounds/Chuva.wav")
const soundCoffeeShop = new Audio("./sounds/Cafeteria.wav")
const soundFireplace = new Audio("./sounds/Lareira.wav")

export default function Sounds(){
    

    soundForest.loop = true
    soundRain.loop = true
    soundFireplace.loop = true
    soundCoffeeShop.loop = true

    function audioOn(audio){
        if(isOn == true){
            audio.pause()
            isOn = false
            return
        }else{
            audio.play()
            isOn = true
        }
    }


    return{
        audioOn,
    }
}

export {
    soundForest,
    soundRain,
    soundFireplace,
    soundCoffeeShop, 
    isOn
}