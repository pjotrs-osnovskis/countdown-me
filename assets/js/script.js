const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


const countdownEnd = document.getElementById("enter-date")


function countdown() {
  const endDate = new Date(countdownEnd.value);
  const currentDate = new Date();

  const totalSeconds = (endDate - currentDate) / 1000
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}


countdown();

setInterval(countdown, 1000);


