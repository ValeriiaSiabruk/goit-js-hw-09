const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  if (timerId !== null) return;

  body.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
});
