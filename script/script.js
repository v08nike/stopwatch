const timeStart = document.querySelector(`#timeStart`);
const timeReset = document.querySelector(`#timeReset`);
const timehours = document.querySelector(`#timehours`);
const timeMinutes = document.querySelector(`#timeMinutes`);
const timeSeconds = document.querySelector(`#timeSeconds`);
const timeMiliSeconds = document.querySelector(`#timeMiliSeconds`);

let time = [0, 0, 0, 0];
let i = 1;
let timer;

function timeUpdate(v1, v2) {
  if (v2 < 10) {
    v1.innerHTML = "0" + v2;
  } else {
    v1.innerHTML = v2;
  }
}

function playPause() {
  if (i) {
    i = 0;
    countStart();
    timeStart.innerHTML = "Stop";
  } else {
    window.clearInterval(timer);
    timeStart.innerHTML = "Start";
    i = 1;
  }
}
function reset() {
  window.clearInterval(timer);
  timeStart.innerHTML = "Start";
  time = [0, 0, 0, 0];
  timeUpdate(timeMiliSeconds, 0);
  timeUpdate(timeSeconds, 0);
  timeUpdate(timeMinutes, 0);
  timeUpdate(timehours, 0);
  i = 1;
}
function countStart() {
  timer = window.setInterval(() => {
    time[3]++;

    if (time[3] >= 100) {
      time[2]++;
      timeUpdate(timeSeconds, time[2]);
      time[3] = 0;
    }

    if (time[2] >= 60) {
      time[1]++;
      timeUpdate(timeMinutes, time[1]);
      time[2] = 0;
    }

    if (time[1] >= 60) {
      time[0]++;
      timeUpdate(timehours, time[0]);
      time[1] = 0;
    }

    timeUpdate(timeMiliSeconds, time[3]);
  }, 10);
}

timeReset.addEventListener("click", () => {
  reset();
});
timeStart.addEventListener("click", () => {
  playPause();
});
document.addEventListener("keyup", (event) => {
  if (event.keyCode == 32 || event.keyCode == 13) {
    playPause();
  } else if (event.keyCode == 16) {
    reset();
  }
});
