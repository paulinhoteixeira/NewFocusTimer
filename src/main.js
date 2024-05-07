import * as sounds from './Timer/sounds.js'
import {
  forestCard,
  rainCard,
  coffeeshopCard,
  bonfireCard,
  forestIcon,
  rainIcon,
  coffeeshopIcon,
  bonfireIcon,
} from './Timer/elements.js';


const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const addMinutes = document.querySelector("#addMinutes");
const increaseMinutes = document.querySelector("#increaseMinutes");
const forestButton = document.querySelector("#forestButton");
const rainButton = document.querySelector("#rainButton");
const coffeeshopButton = document.querySelector("#coffeeshopButton");
const bonfireButton = document.querySelector("#bonfireButton");
let timeOutID

addMinutes.addEventListener("click", () => {
  let newMinutes = Number(minutes.textContent) + 5;
  minutes.textContent = String(newMinutes).padStart(2, "0");
});

increaseMinutes.addEventListener("click", () => {
  let newMinutes = (minutes.textContent = 5
    ? 5
    : Number(minutes.textContent) - 5);
  minutes.textContent = String(newMinutes).padStart(2, "0");
});

play.addEventListener("click", startTimer)
stop.addEventListener("click", stopTimer)

forestButton.addEventListener("click",() =>{
  if(forestCard.classList.contains("cardPressed")){
    sounds.forest.pause()
    forestCard.classList.remove("cardPressed")
    forestIcon.classList.remove("iconPressed")
  }else{
    sounds.forest.play()
    sounds.forest.loop = true

    sounds.rain.pause()
    sounds.bonfire.pause()
    sounds.coffeeshop.pause()

    forestCard.classList.add("cardPressed")
    forestIcon.classList.add("iconPressed")
    rainCard.classList.remove("cardPressed")
    rainIcon.classList.remove("iconPressed")  
    coffeeshopCard.classList.remove("cardPressed")
    coffeeshopIcon.classList.remove("iconPressed")
    bonfireCard.classList.remove("cardPressed")
    bonfireIcon.classList.remove("iconPressed")
  }
})

rainButton.addEventListener("click",() =>{
  if(rainCard.classList.contains("cardPressed")){
    sounds.rain.pause()
    rainCard.classList.remove("cardPressed")
    rainIcon.classList.remove("iconPressed")  
  }else{
    sounds.rain.play()
    sounds.rain.loop = true

    sounds.forest.pause()
    sounds.bonfire.pause()
    sounds.coffeeshop.pause()

    rainCard.classList.add("cardPressed")
    rainIcon.classList.add("iconPressed")
    forestCard.classList.remove("cardPressed")
    forestIcon.classList.remove("iconPressed")
    coffeeshopCard.classList.remove("cardPressed")
    coffeeshopIcon.classList.remove("iconPressed")
    bonfireCard.classList.remove("cardPressed")
    bonfireIcon.classList.remove("iconPressed")
  }
  
})

coffeeshopButton.addEventListener("click",() =>{
  if(coffeeshopCard.classList.contains("cardPressed")){
    sounds.coffeeshop.pause()
    coffeeshopCard.classList.remove("cardPressed")
    coffeeshopIcon.classList.remove("iconPressed")
  }else{
    sounds.coffeeshop.play()
    sounds.coffeeshop.loop = true

    sounds.forest.pause()
    sounds.rain.pause()
    sounds.bonfire.pause()

    coffeeshopCard.classList.add("cardPressed")
    coffeeshopIcon.classList.add("iconPressed")
    forestCard.classList.remove("cardPressed")
    forestIcon.classList.remove("iconPressed")
    rainCard.classList.remove("cardPressed")
    rainIcon.classList.remove("iconPressed")  
    bonfireCard.classList.remove("cardPressed")
    bonfireIcon.classList.remove("iconPressed")
  }
})

bonfireButton.addEventListener("click",() =>{
  if(bonfireCard.classList.contains("cardPressed")){
    sounds.bonfire.pause()
    bonfireCard.classList.remove("cardPressed")
    bonfireIcon.classList.remove("iconPressed")
  }else{
    sounds.bonfire.play()
    sounds.bonfire.loop = true

    sounds.forest.pause()
    sounds.rain.pause()
    sounds.coffeeshop.pause()


    bonfireCard.classList.add("cardPressed")
    bonfireIcon.classList.add("iconPressed")
    forestCard.classList.remove("cardPressed")
    forestIcon.classList.remove("iconPressed")
    rainCard.classList.remove("cardPressed")
    rainIcon.classList.remove("iconPressed") 
    coffeeshopCard.classList.remove("cardPressed")
    coffeeshopIcon.classList.remove("iconPressed")
  }
})




function startTimer() {
  let newSeconds = Number(seconds.textContent)
  let newMinutes = Number(minutes.textContent)

  if(seconds.textContent > 0){
    newSeconds--;
  }else{
    newSeconds = 59
    newMinutes--
  }
  seconds.textContent = String(newSeconds).padStart(2, "0");
  minutes.textContent = String(newMinutes).padStart(2, "0");

  if(seconds.textContent == 0 & minutes.textContent == 0){
    resetTimer()
    return
  }

  timeOutID = setTimeout(startTimer, 1000)
}

function stopTimer() {
  clearTimeout(timeOutID)
  resetTimer()
}

function resetTimer() {
  minutes.textContent = 25;
  seconds.textContent = "00";
}

