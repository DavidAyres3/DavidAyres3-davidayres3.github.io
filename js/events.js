import {
  buttonPlay,
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
  buttonDark,
  buttonLight
} from "./elements.js"

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

  buttonDark.addEventListener('click', function() {
    document.body.classList.add("light")
    document.body.classList.remove("dark")
    buttonDark.classList.add("hide")
    buttonLight.classList.remove("hide")
  });

  buttonLight.addEventListener('click', function() {
    document.body.classList.add("dark")
    document.body.classList.remove("light")
    buttonLight.classList.add("hide")
    buttonDark.classList.remove("hide")
  })
}
