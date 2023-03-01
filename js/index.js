import Controls from "./controls.js"
import { resetTimer } from "./controls.js"
import Events from "./events.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
    minutesDisplay,
    secondsDisplay,
    countDownOn,
    btnFireplace
} from "./elements.js"


const controls = Controls({
    countDownOn,
    minutesDisplay,
    secondsDisplay
})

const timer = Timer({
    resetTimer,
})

const sounds = Sounds({btnFireplace})


Events({controls, timer, sounds})

