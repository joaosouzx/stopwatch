const leftBtn = document.getElementById("left-btn");
const topBtn = document.getElementById("top-btn");
const rightBtn = document.getElementById("right-btn");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.getElementById("stopwatch-display-numbers");
let int = null;

leftBtn.addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  // timerRef.innerHTML = "00 : 00 : 00 : 000";
  timerRef.innerHTML = "0:00:000";
});

topBtn.addEventListener("click", () => {
  clearInterval(int);
});

rightBtn.addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

function displayTimer() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  // let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  // timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
  timerRef.innerHTML = `${m}:${s}:${ms}`;
}
