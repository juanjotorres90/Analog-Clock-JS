const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hand = document.querySelectorAll(".hand");
const date = new Date();
const seconds = date.getSeconds();
const minutes = date.getMinutes();
const hours = date.getHours();
let secondsDegrees = seconds / 60 * 360 + 90;
let minDegrees = minutes / 60 * 360 + 90 + seconds * (360 / 60) / 60;
let hourDegrees = hours / 12 * 360 + 90 + minutes * (360 / 60) / 12;

function setDate() {

  secondsDegrees += 6;
  minDegrees += 6 / 60;
  hourDegrees += 360 / 12 / 3600;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);