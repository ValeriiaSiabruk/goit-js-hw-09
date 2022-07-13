const flatpickr = require('flatpickr');
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const startTime = document.querySelector('[data-start]');
let timeDifference;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeDifference = new Date(selectedDates[0]) - new Date();

    if (timeDifference <= 0) {
      alert('Please choose a date in the futures');
      startTime.disabled = true;
      return;
    }

    startTime.disabled = false;
  },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer(data) {
  const { days, hours, minutes, seconds } = data;

  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return new String(value).padStart(2, '0');
}

startTime.addEventListener('click', () => {
  let intervalId = setInterval(() => {
    if (timeDifference <= 1000) clearInterval(intervalId);

    updateTimer(convertMs(timeDifference));
    timeDifference -= 1000;
  }, 1000);
});
