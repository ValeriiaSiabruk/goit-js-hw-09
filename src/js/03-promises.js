import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('form');
let formState = {};

const formSubmitHandler = event => {
  event.preventDefault();
  const { delay, step, amount } = formState;

  for (let i = 0; i < amount; i++) {
    const currentDelay = +delay + +step * i;

    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};

form.addEventListener('input', event => {
  formState[event.target.name] = event.target.value;
});
form.addEventListener('submit', formSubmitHandler);
