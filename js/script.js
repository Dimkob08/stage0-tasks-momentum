// -------------------------------Time // -------------------------------

const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    console.log(currentTime);
    setTimeout(showTime, 1000);
    return currentTime;
}
const showTimeOfDay = showTime();
const time = document.querySelector('.time');
// console.log(time);
time.textContent = `${showTimeOfDay}`;

// -------------------------------

// -------------------------------Date

const showDate = () => {
    const date = new Date();
    const options = { month: 'long', day: 'numeric' };
    const currentDate = date.toLocaleDateString('en-Us', options);
    console.log(currentDate);
    setTimeout(showDate, 1000);
    return currentDate;
}
const showDateOfDay = showDate();
const dates = document.querySelector('.date');
// console.log(dates);
dates.textContent = `${showDateOfDay}`;

// -------------------------------// -------------------------------

// -------------------------------Greeting // -------------------------------
const date = new Date();
const hours = date.getHours();
const getTimeOfDay = () => {
    let text;
    if (hours >= 6 && hours <= 11) {
        text = "morning";
    } else if (hours >= 12 && hours <= 17) {
        text = "afternoon";
    } else if (hours >= 18 && hours <= 23) {
        text = "evening";
    } else {
        text = "night";
    }
    return text;
};
const timeOfDay = getTimeOfDay();
const greeting = document.querySelector('.greeting');
greeting.textContent = `Good ${timeOfDay} `;
// -------------------------------Input.value
const name = document.querySelector('.name');
const setLocalStorage = () => {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);
// -------------------------------// -------------------------------

// -------------------------------Slider images // -------------------------------

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const bgNum = getRandomInt(1, 20);
const funcBgNum = `${bgNum}.jpg')`;
// console.log(bgNum);
const setBg = (num, targetLength) => {
    return num.toString().padStart(targetLength, "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/08.jpg')");
}
const bodyBackgroundImage = setBg(funcBgNum, 104);
// console.log(bodyBackgroundImage);
const body = document.querySelector('.body-bgr');
body.style.backgroundImage = `${bodyBackgroundImage}`

// -------------------------------// -------------------------------