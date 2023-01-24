let clock = document.querySelector(".clock");

function time() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
    session = "PM";
  }
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeNaw = `${hour}:${minutes}:${seconds} ${session}`;
  clock.innerHTML = timeNaw;
  setInterval(time, 1000);
}

time();
