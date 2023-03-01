export default function Sounds(){
    const soundForest = new Audio("./sounds/Floresta.wav")
    const soundRain = new Audio("./sounds/Chuva.wav")
    const soundCoffeeShop = new Audio("./sounds/Cafeteria.wav")
    const soundFireplace = new Audio("./sounds/Lareira.wav")

    soundForest.loop = true
    soundRain.loop = true
    soundFireplace.loop = true
    soundCoffeeShop.loop = true

    function audioForestOn(){
        soundForest.play()
        
    }
    function audioRainOn(){
        soundRain.play()
    }

    function audioCoffeShopOn(){
        soundCoffeeShop.play()
    }

    function audioFireplaceOn(){
        soundFireplace.play()
    }
    

    return{
        audioForestOn,
        audioRainOn,
        audioFireplaceOn,
        audioCoffeShopOn,
    }
}