import Controls from "./controls.js"
import { resetTimer } from "./controls.js"
import Events from "./events.js"
import Timer from "./timer.js"
import {
    minutesDisplay,
    secondsDisplay,
    countDownOn
} from "./elements.js"


const controls = Controls({
    countDownOn,
    minutesDisplay,
    secondsDisplay
})

const timer = Timer({
    resetTimer,
})


Events({controls, timer})

