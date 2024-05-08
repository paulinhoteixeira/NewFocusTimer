import * as sounds from "./sounds.js";
import {
  forestCard,
  rainCard,
  coffeeshopCard,
  bonfireCard,
  forestIcon,
  rainIcon,
  coffeeshopIcon,
  bonfireIcon,
} from "./elements.js";

function stopSound() {
  sounds.forest.pause();
  sounds.rain.pause();
  sounds.coffeeshop.pause();
  sounds.bonfire.pause();
}

function resetAllCards() {
  forestCard.classList.remove("cardPressed");
  forestIcon.classList.remove("iconPressed");
  rainCard.classList.remove("cardPressed");
  rainIcon.classList.remove("iconPressed");
  coffeeshopCard.classList.remove("cardPressed");
  coffeeshopIcon.classList.remove("iconPressed");
  bonfireCard.classList.remove("cardPressed");
  bonfireIcon.classList.remove("iconPressed");
}

function resetCards(card) {
  switch (card) {
    case "forest":
      rainCard.classList.remove("cardPressed");
      rainIcon.classList.remove("iconPressed");
      coffeeshopCard.classList.remove("cardPressed");
      coffeeshopIcon.classList.remove("iconPressed");
      bonfireCard.classList.remove("cardPressed");
      bonfireIcon.classList.remove("iconPressed");
      break;
    case "rain":
      forestCard.classList.remove("cardPressed");
      forestIcon.classList.remove("iconPressed");
      coffeeshopCard.classList.remove("cardPressed");
      coffeeshopIcon.classList.remove("iconPressed");
      bonfireCard.classList.remove("cardPressed");
      bonfireIcon.classList.remove("iconPressed");
      break;
    case "bonfire":
      forestCard.classList.remove("cardPressed");
      forestIcon.classList.remove("iconPressed");
      rainCard.classList.remove("cardPressed");
      rainIcon.classList.remove("iconPressed");
      coffeeshopCard.classList.remove("cardPressed");
      coffeeshopIcon.classList.remove("iconPressed");

      break;
    case "coffeeshop":
      forestCard.classList.remove("cardPressed");
      forestIcon.classList.remove("iconPressed");
      rainCard.classList.remove("cardPressed");
      rainIcon.classList.remove("iconPressed");
      bonfireCard.classList.remove("cardPressed");
      bonfireIcon.classList.remove("iconPressed");
      break;
  }
}

function pressCard(card) {
  switch (card) {
    case "forest":
      forestCard.classList.add("cardPressed");
      forestIcon.classList.add("iconPressed");
      break;
    case "rain":
      rainCard.classList.add("cardPressed");
      rainIcon.classList.add("iconPressed");
      break;
    case "bonfire":
      bonfireCard.classList.add("cardPressed");
      bonfireIcon.classList.add("iconPressed");
      break;
    case "coffeeshop":
      coffeeshopCard.classList.add("cardPressed");
      coffeeshopIcon.classList.add("iconPressed");
      break;
  }
}

export function selectSound(sound) {
  stopSound();

  switch (sound) {
    case "forest":
      if (forestCard.classList.contains("cardPressed")) {
        sounds.forest.pause();
        resetAllCards();
      } else {
        resetCards(sound);
        pressCard(sound);
        sounds.forest.play();
        sounds.forest.loop = true;
      }
      break;
    case "rain":
      if (rainCard.classList.contains("cardPressed")) {
        sounds.rain.pause();
        resetAllCards();
      } else {
        resetCards(sound);
        pressCard(sound);
        sounds.rain.play();
        sounds.rain.loop = true;
      }
      break;
    case "bonfire":
      if (bonfireCard.classList.contains("cardPressed")) {
        sounds.bonfire.pause();
        resetAllCards();
      } else {
        resetCards(sound);
        pressCard(sound);
        sounds.bonfire.play();
        sounds.bonfire.loop = true;
      }
      break;
    case "coffeeshop":
      if (coffeeshopCard.classList.contains("cardPressed")) {
        sounds.coffeeshop.pause();
        resetAllCards();
      } else {
        resetCards(sound);
        pressCard(sound);
        sounds.coffeeshop.play();
        sounds.coffeeshop.loop = true;
      }
      break;
  }
}
