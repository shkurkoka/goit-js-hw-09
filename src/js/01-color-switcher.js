const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 
start.addEventListener("click", () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    start.setAttribute("disabled", true);
    if (stop.hasAttribute("disabled")) {
        stop.removeAttribute("disabled");
    }
});

stop.addEventListener("click", () => {
    clearInterval(timerId);
    start.removeAttribute("disabled");
    stop.setAttribute("disabled", true);
}); 