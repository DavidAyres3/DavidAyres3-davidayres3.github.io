
export default function Sounds (){

  const forestSound = new Audio ('./audio/Floresta.wav')
  const rainSound = new Audio ('./audio/Chuva.wav')
  const coffeeSound = new Audio ('./audio/Cafeteria.wav')
  const fireplaceSound = new Audio ('./audio/Lareira.wav')
  const kitchenTimer = new Audio ("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  let forest = forestSound
  let rain = rainSound
  let coffee = coffeeSound
  let fireplace = fireplaceSound
  let end = kitchenTimer


  return {
   forest,
   rain,
   coffee,
   fireplace,
   end,
}
}