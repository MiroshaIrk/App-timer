// Timer fields
const hourElement = document.querySelector('.hours');
const minutElement = document.querySelector('.minutes');
const secondElement = document.querySelector('.seconds');
const milliSecElement = document.querySelector('.milliseconds');

// Buttons
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const newBtn = document.querySelector('.new');

// Listeners
startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  clearFields();
  newBtn.disabled = true;
});

newBtn.addEventListener('click', () => {
  clearInterval(interval);
  const results = document.querySelector('.results');
  const block = document.createElement('div');
  block.innerText = `(${counter}) ${hourElement.textContent}:${minutElement.textContent}:${secondElement.textContent}:${milliSecElement.textContent}`
  counter++;
  results.append(block);
  clearFields();
  interval = setInterval(startTimer, 10);
})

// Variables
let hour = 00,
  minut = 00,
  second = 00,
  milliSec = 00,
  interval,
  counter = 1;


// Function
function startTimer() {
  milliSec++;

  // Milliseconds
  if (milliSec <= 9) {
    milliSecElement.innerText = `0${milliSec}`;
  }
  if (milliSec > 9) {
    milliSecElement.innerText = milliSec;
  }
  if (milliSec > 99) {
    second++;
    secondElement.innerText = `0${second}`;
    milliSec = 0;
    milliSecElement.innerText = `0${milliSec}`;
  }

  // Seconds
  if (second <= 9) {
    secondElement.innerText = `0${second}`;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minut++;
    minutElement.innerText = `0${minut}`;
    second = 0;
    secondElement.innerText = `0${second}`;
  }

  // Minutes
  if (minut < 10) {
    minutElement.innerText = `0${minut}`;
  }
  if (minut > 9) {
    minutElement.innerText = minut;
  }
  if (minut > 59) {
    hour++;
    hourElement.innerText = `0${hour}`;
    minut = 0;
    minutElement.innerText = `0${minut}`;
  }

  // Hours
  if (hour > 9) {
    hourElement.innerText = hour;
  }
  if (hour > 24) {
    hour = 0;
    hourElement.innerText = `0${hour}`;
  }

  newBtn.disabled = false;
}

function clearFields() {
  hour = 00;
  minut = 00;
  second = 00;
  milliSec = 00;
  hourElement.textContent = '00';
  minutElement.textContent = '00';
  secondElement.textContent = '00';
  milliSecElement.textContent = '00';
}

