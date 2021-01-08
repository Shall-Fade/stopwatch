let secondCount = 0;
let stopWatch;
const displayPara = document.querySelector('.clock');

// Создаем переменные часов, минут, секунд и создаем отображение счета.

let displayCount = () => {

// Создаем переменные часов, минут и секунд.

    let hours = Math.floor(secondCount / 3600);
    let minutes = Math.floor((secondCount % 3600) / 60);
    let seconds = Math.floor(secondCount % 60);

// Создаем отображение счета < 10.

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

// Создаем отображение времени в абзаце.

    displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

// Увеличивает счетчик на 1 единицу.

    secondCount++;
}

// Создаем кнопки в js.

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

// Когда будет нажата кнопка 'Start' счетчик будет обновляться раз в секунду.

startBtn.addEventListener('click', () => {
    stopWatch = setInterval(displayCount, 1000);
    startBtn.disabled = true;
});

// Когда будет нажата кнопка 'Pause' счетчик остановится.

pauseBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
});

// Когда будет нажата кнопка 'Reset' счетчик обновится.

resetBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
    secondCount = 0;
    displayCount();
});

// Запускаем displayCount().

displayCount();