// -------------------------------Time // -------------------------------

const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    // console.log(currentTime);
    setTimeout(showTime, 1000);
    return currentTime;
}
const showTimeOfDay = showTime();
const time = document.querySelector('.time');
// console.log(time);
time.textContent = `${showTimeOfDay}`;

// -------------------------------Date

const showDate = () => {
    const date = new Date();
    const options = { month: 'long', day: 'numeric' };
    const currentDate = date.toLocaleDateString('en-Us', options);
    // console.log(currentDate);
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

// -------------------------------Slider background images // -------------------------------
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const bgNum = getRandomInt(1, 20);
const funcBgNum = `${bgNum}.jpg')`;
console.log(bgNum);
const setRandomBgr = (num, targetLength) => {
    return num.toString().padStart(targetLength, "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/08.jpg')");
}
const setBgr = setRandomBgr(funcBgNum, 104);
// console.log(setBgr);
const body = document.querySelector('.body-bgr');
body.style.backgroundImage = `${setBgr}`;
// -------------------------------Slider images click

// function setBg() {
//     const img = new Image();
//     img.src = url("../assets/img/bg.jpg");
//     img.onload = () => {
//         body.style.backgroundImage = `${setBgr}`;
//     };
// }


// const getSlideNext = () => (bgNum <= 19 ? bgNum + 1 : 1);
const getSlideNext = () => {
    let randomNumNext;
    if (bgNum <= 19) {
        randomNumNext = bgNum + 1;
    } else {
        randomNumNext = 1;
    }
    console.log(randomNumNext)
    const funcBgNumClickNext = `${randomNumNext}.jpg')`;
    const setBgrClickNext = setRandomBgr(funcBgNumClickNext, 104);
    console.log(setBgrClickNext);
    body.style.backgroundImage = `${setBgrClickNext}`;
};
const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', getSlideNext);

// const printNumbers = () => {
//     let i = randomNumNext;
//     while (i <= 20) {
//         console.log(i);
//         i = i + 1;
//     }
// };



// const getSlidePrev = () => (bgNum >= 2 ? bgNum - 1 : 20);
const getSlidePrev = () => {
    let randomNumPrev;
    if (bgNum >= 2) {
        randomNumPrev = bgNum - 1;
    } else {
        randomNumPrev = 20;
    }
    console.log(randomNumPrev);
    const funcBgNumClickPrev = `${randomNumPrev}.jpg')`;
    const setBgrClickPrev = setRandomBgr(funcBgNumClickPrev, 104);
    console.log(setBgrClickPrev);
    body.style.backgroundImage = `${setBgrClickPrev}`;
};
const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', getSlidePrev);

// const printNumbers = (initialNumber) => {
//     let i = initialNumber;
//     while (i >= 1) {
//         console.log(i);
//         i = i - 1;
//     }
// };



// -------------------------------// -------------------------------