const currentDate = new Date();

//вписали дату строкой в элемент
const timeElement = document.querySelector('.currentTime');


//Получим день недели кириллицей **не смог впихнуть внутрь getTimeString
function getWeekDay(date) {
    const arrayDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return arrayDays[date.getDay()];
}
const dayOfWeek = getWeekDay(currentDate);

//Получим месяц кириллицей  **не смог впихнуть внутрь getTimeString
function getMonth(date) {
    const arrayMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return arrayMonths[date.getDay()];
}
const month = getMonth(currentDate);

//выведем текущее время и зададим интервал
function getTimeString(dateObject) {

    //исправление нулей
    let hours = dateObject.getHours();
    if (hours < 10) hours = "0" + hours;
    let minute = dateObject.getMinutes();
    if (minute < 10) minute = "0" + minute;
    let second = dateObject.getSeconds();
    if (second < 10) second = "0" + second;

    //строка
    return `${dayOfWeek} ${dateObject.getDate()} ${month}, ${hours}:${minute}:${second}`;
}

setInterval( () => {
    const time = new Date();
    timeElement.innerHTML = getTimeString(time);
  }, 1000 );

timeElement.innerHTML = getTimeString(currentDate);

//работа с alarmInput
let h;
let m;

function setAlarm() {
    const alarmTime = document.querySelector(".alarmInput__setTime").value;
    let arrAlarmTime = alarmTime.split(':');
    h = arrAlarmTime[0];
    m = arrAlarmTime[1];
    alert(`Будильник установлен на ${alarmTime}`);
}

function playBell() {
    let date = new Date();
    const aud = new Audio('song.mp3');
    let nowHours = date.getHours();  
    let nowMinutes = date.getMinutes();
    let nowSeconds = date.getSeconds(); 
    if (h == nowHours && m == nowMinutes && nowSeconds == 0) {
        aud.play();
    } 
}

setInterval(playBell, 1000);