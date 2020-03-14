import string from "./css.js";

let n = 1;
demo1.innerText = string.substring(0, n);
document.querySelector("#demo2").innerHTML = string.substring(0, n);

const run = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  demo1.innerText = string.substring(0, n);
  demo1.scrollTop = 9999;
  document.querySelector("#demo2").innerHTML = string.substring(0, n);
};
let time = 100;
const play = () => {
  return setInterval(run, time);
};
const pause = () => {
  window.clearInterval(id);
};

let id = play();

btnPause.onclick = () => {
  pause();
};
btnPlay.onclick = () => {
  id = play();
};
btnFast.onclick = () => {
  pause();
  time = 0;
  id = play();
};
btnNormal.onclick = () => {
  pause();
  time = 100;
  id = play();
};
btnSlow.onclick = () => {
  pause();
  time = 300;
  id = play();
};
