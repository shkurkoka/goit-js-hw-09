const body = document.querySelector('body');
const startRand = document.querySelector('[data-start]');
const stopRand = document.querySelector('[data-stop]');
stopRand.setAttribute("disabled", true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 
let timerId;


startRand.addEventListener("click", () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    startRand.setAttribute("disabled", true);
    if (stopRand.hasAttribute("disabled")) {
        stopRand.removeAttribute("disabled");
    }
});

stopRand.addEventListener("click", () => {
    clearInterval(timerId);
    startRand.removeAttribute("disabled");
    stopRand.setAttribute("disabled", true);
}); 