import Controls from "./controls.js"
import Timer  from "./timer.js"
import Events from "./events.js"
import Sounds from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay,

} from "./elements.js"

const controls = Controls({
buttonPlay,
buttonPause,
})

const timer = Timer ({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sounds = Sounds() 

Events({controls, timer, sounds})


