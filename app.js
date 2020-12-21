const plusHour = document.getElementById('plusHour');
const minusHour = document.getElementById('minusHour');
const hours = document.querySelector('.hours');


const plusMinute = document.getElementById('plus');
const minusMinute = document.getElementById('minus');
const minutes = document.querySelector('.minutes');

plusHour.addEventListener('click', incrementHours);
minusHour.addEventListener('click', decrementHours);
plusMinute.addEventListener('click', incrementMinute);
minusMinute.addEventListener('click', decrementMinute);


let time = new Date();
let hoursDate = time.getHours();
let minutesDate = time.getMinutes();

hoursDate < 10 ? hours.innerHTML = `0${hoursDate}` : hours.innerHTML =  hoursDate;
minutesDate < 10 ? minutes.innerHTML = `0${minutesDate}` : minutes.innerHTML = minutesDate;


let counter = hoursDate
function incrementHours() {
    if (counter > 22) {
        counter = 0;
    } else {
        counter++;
    }
    counter < 10 ? hours.innerText = `0${counter}`: hours.innerHTML = counter;
}

function decrementHours() {
    if (counter < 1) {
        counter = 23;
    } else {
        counter--;
    }
    counter < 10 ? hours.innerText = `0${counter}`: hours.innerHTML =counter;
}

let minuteCounter = minutesDate
function incrementMinute() {
    if (minuteCounter > 58) {
        minuteCounter = 0;
    } else {
        minuteCounter++;
    }
    minuteCounter < 10 ? minutes.innerText = `0${minuteCounter}`: minutes.innerHTML = minuteCounter;
}

function decrementMinute() {
    if (minuteCounter < 1) {
        minuteCounter = 59;
    } else {
        minuteCounter--;
    }
    minuteCounter < 10 ? minutes.innerText = `0${minuteCounter}`: minutes.innerHTML = minuteCounter;
}


const setAlarm = document.getElementById('set')
setAlarm.addEventListener('click', alarmActive)
var bell = new Audio();
bell.src = './sound/old-fashioned-door-bell-daniel_simon.wav';   

function alarmActive() {
   document.getElementById('stop').style.zIndex = '2';
   document.getElementById('set').style.zIndex = '0'; 
    let set = setInterval(function() { 
        let alarmTime = `${hours.innerHTML}:${minutes.innerHTML}`   
        let time = new Date()
        let hoursDate = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
        let minutesDate = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
        let currentTime = `${hoursDate}:${minutesDate}`
        let extraHour =  hoursDate
        let extraTime = minutesDate !== '00' ? alarmTime.substr(0, alarmTime.length-1)+(alarmTime[alarmTime.length-1]-2+3) : extraHour+':00';
        if(bell == 1){
                clearInterval(set)
            }
            if(currentTime == alarmTime || currentTime == extraTime) {
                bell.play()
            }  
        }, 1000)
} 
const stopAudio = document.getElementById('stop');
stopAudio.addEventListener('click', pauseAudio);

function pauseAudio() { 
   document.getElementById('stop').style.zIndex = '0';
   document.getElementById('set').style.zIndex = '2'; 
    bell.pause()
    bell = 1
    location.reload()
    return bell;
  } 
