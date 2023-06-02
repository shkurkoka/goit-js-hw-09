function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
  })
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  let delayTime = Number(delay.value);
  let stepTime = Number(step.value);
  let amountNum = Number(amount.value);
  
  for (let i = 0; i < amountNum; i++) {
    let delayStep = delayTime + stepTime * i;
    let pos = i + 1;
    setTimeout(() => {
      createPromise(pos, delayStep)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, delayStep);
    clearTimeout();
    
  }
});
