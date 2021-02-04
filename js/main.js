
// Делаем расчеты:

// Текущий год
const currentYear = new Date().getFullYear();

// Действующие элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const preloader = document.querySelector('#preloader');

// Устанавливаем год на страницу (innerText - заполняет текст в HTML)
year.innerText = currentYear + 1;

function updateTimer() {
    // Текущее время
    const currentTime = new Date();

    // Дата нового года (01.01.2021)
    const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

    // разница между новым годом и текущим временем
    const diff = nextYear - currentTime;

    // Сколько дней осталось (Math.floor - округляет значение до целых)
    const daysLeft = Math.floor(diff/1000/60/60/24);
    // Сколько часов осталось (% 24   -  остаток от деления на 24)
    const hoursLeft = Math.floor(diff/1000/60/60) % 24;
    // Сколько минут осталось
    const minutesLeft = Math.floor(diff/1000/60) % 60;
    // Сколько секунд осталось
    const secondsLeft = Math.floor(diff/1000) % 60;


    // Устанавливаем дату 
    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    // < 10 ? '0' + hoursLeft : hoursLeft   -  если меньше 10, то добавляем 0 в начало, иначе просто записываем
}


// Запускаем функцию раз в 1 секунду
setInterval(updateTimer, 1000);

// Запуск функции 1 раз (меняем свойство таймера с display:none на display:flex, удаляем preloader)
setTimeout(function() {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1500)