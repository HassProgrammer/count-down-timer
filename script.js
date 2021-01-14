const  daysEl = document.getElementById('day');
const  hoursEl = document.getElementById('hours');
const  minsEl = document.getElementById('mins');
const  secondsEl = document.getElementById('second');


const newYears = '1 jan 2022';

function countdown() {
    const newYearsDate   = new Date(newYears);
    const currentDate   = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 36000)  % 24;
    const mins = Math.floor(totalSeconds / 60 ) % 60;
    const second = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = second;


}


// initial call
countdown();

setInterval(countdown, 1000);