import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTurnDown,
  buttonTurnUp,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
  volumeForest,
  volumeRain,
  volumeCoffee,
  volumeFireplace,
} from "./elements.js"

import{
  input,
  body,
  min,
  sec,
  path,
  dots,
  pathf,
  pathr,
  pathc,
  pathfp,
  playp,
  pausep,
  stopp,
  upp,
  downp,
  fs,
  rs,
  cs,
  fps
} from "./dark.js"

export default function (
  {controls, timer, sounds}
) {

buttonPlay.addEventListener('click', function() {
  if (minutesDisplay.textContent == 0 && secondsDisplay.textContent == 0){
    return
  }
  else {
  controls.play()
  timer.countdown()
  }
})

buttonPause.addEventListener('click', function(){
  timer.hold()
  controls.pause()
})
  
buttonStop.addEventListener('click', function(){
  controls.pause()
  timer.reset()
})

buttonTurnUp.addEventListener('click', function() {
  timer.updateDisplay(Number(minutesDisplay.textContent) +5, secondsDisplay.textContent)
})

buttonTurnDown.addEventListener('click', function(){
  if (minutesDisplay.textContent <= 5){
    return
  }
  else {
  timer.updateDisplay(Number(minutesDisplay.textContent) -5, secondsDisplay.textContent)
  }
})

buttonForest.addEventListener('click', function(){
  sounds.forest.play()
})

buttonRain.addEventListener('click', function(){
  sounds.rain.play()
})

buttonCoffee.addEventListener('click', function(){
    sounds.coffee.play()
})

buttonFireplace.addEventListener('click', function(){
    sounds.fireplace.play()
  })

  volumeForest.addEventListener('input', function () {
    sounds.forest.volume = volumeForest.value
  })

  volumeRain.addEventListener('input', function () {
    sounds.rain.volume = volumeRain.value
  })

  volumeCoffee.addEventListener('input', function () {
    sounds.coffee.volume = volumeCoffee.value
  })

  volumeFireplace.addEventListener('input', function () {
    sounds.fireplace.volume = volumeFireplace.value
  })
}
const toggleThemeMode = () => {
  input.classList.toggle("dark")
  body.classList.toggle("dark")
  min.classList.toggle("dark")
  sec.classList.toggle("dark")
  path.classList.toggle("dark")
  dots.classList.toggle("dark")
  pathf.classList.toggle("dark")
  pathr.classList.toggle("dark")
  pathc.classList.toggle("dark")
  pathfp.classList.toggle("dark")
  playp.classList.toggle("dark")
  pausep.classList.toggle("dark")
  stopp.classList.toggle("dark")
  upp.classList.toggle("dark")
  downp.classList.toggle("dark")
  fs.classList.toggle("dark")
  rs.classList.toggle("dark")
  cs.classList.toggle("dark")
  fps.classList.toggle("dark")
}

input.onchange = toggleThemeMode