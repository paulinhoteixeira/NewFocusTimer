import {selectSound} from './Timer/actions.js'

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
  selectSound("forest")
})

rainButton.addEventListener("click",() =>{
  selectSound("rain")  
})

coffeeshopButton.addEventListener("click",() =>{
  selectSound("coffeeshop")

})

bonfireButton.addEventListener("click",() =>{
  selectSound("bonfire")
  
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

