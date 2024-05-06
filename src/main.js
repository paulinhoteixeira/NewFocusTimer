const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const addMinutes = document.querySelector("#addMinutes");
const increaseMinutes = document.querySelector("#increaseMinutes");
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