import {selectSound} from './Timer/actions.js'
import {startTimer, stopTimer} from './Timer/timer.js'
import * as el from './Timer/elements.js'


el.play.addEventListener("click", startTimer)
el.stop.addEventListener("click", stopTimer)

el.addMinutes.addEventListener("click", () => {
  let newMinutes = Number(el.minutes.textContent) != 60 ? Number(el.minutes.textContent) + 5 : 60;
  el.minutes.textContent = String(newMinutes).padStart(2, "0");
});

el.increaseMinutes.addEventListener("click", () => {
  let newMinutes = Number(el.minutes.textContent) == 5
    ? 5
    : Number(el.minutes.textContent) - 5;
  el.minutes.textContent = String(newMinutes).padStart(2, "0");
});


el.forestButton.addEventListener("click",() =>{
  selectSound("forest")
})

el.rainButton.addEventListener("click",() =>{
  selectSound("rain")  
})

el.coffeeshopButton.addEventListener("click",() =>{
  selectSound("coffeeshop")

})

el.bonfireButton.addEventListener("click",() =>{
  selectSound("bonfire")
  
})

