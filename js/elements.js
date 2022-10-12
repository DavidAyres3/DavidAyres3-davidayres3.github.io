const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonTurnDown = document.querySelector('.turn-down')
const buttonTurnUp = document.querySelector('.turn-up')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonForest = document.querySelector('.forest-sound')
const buttonRain = document.querySelector('.rain-sound')
const buttonCoffee = document.querySelector('.coffee-sound')
const buttonFireplace = document.querySelector('.fireplace-sound')
const volumeForest = document.querySelector('input')
const volumeRain = buttonRain.querySelector('input')
const volumeCoffee = buttonCoffee.querySelector('input')
const volumeFireplace = buttonFireplace.querySelector('input')

export {
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
}