import * as el from './elements.js'


let timeOutID
export function startTimer() {
  let newSeconds = Number(el.seconds.textContent)
  let newMinutes = Number(el.minutes.textContent)

  if(el.seconds.textContent > 0){
    newSeconds--;
  }else{
    newSeconds = 59
    newMinutes--
  }
  el.seconds.textContent = String(newSeconds).padStart(2, "0");
  el.minutes.textContent = String(newMinutes).padStart(2, "0");

  if(el.seconds.textContent == 0 & el.minutes.textContent == 0){
    resetTimer()
    return
  }

  timeOutID = setTimeout(startTimer, 1000)
}

export function stopTimer() {
  clearTimeout(timeOutID)
  resetTimer()
}

function resetTimer() {
  el.minutes.textContent = 25;
  el.seconds.textContent = "00";
}

