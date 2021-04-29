function timer(id, deadline) {

    function getRemainingTime(endtime) { 
        const t = Date.parse(endtime) - Date.parse(new Date()), // вычитаем из переданного дедлайна настоящее время и получаем время которое остается до дедлайна в милисекундах
              days  = Math.floor(t / (1000 * 60 * 60 * 24)), // получаем время, оставшееся до дедлайна именно в днях
              hours = Math.floor((t / 1000 * 60 * 60) % 24), // получаем остаток от того сколько дней осталось до дедлайна, т. е. часы
              minutes = Math.floor((t / 1000 / 60) % 60), // получаем минуты 
              seconds = Math.floor((t / 1000) % 60); // получаем секунды

        return { // возвращаем объект
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) { // функция, добавляющая ноль, если допустим 9 часов то будет 09
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endTime) { 
        const timer = document.querySelector(selector), // находим все дивы 
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); // обновлять значение каждую секунду

            updateClock();

        function updateClock() {
            const t = getRemainingTime(endTime);
// получается так: при вызове сет клок передаем в аргумент endTime константу deadline, и в итоге она записывается и в вызове гет       ремейнин тайм здесь, и таким образом все работает правильно

            days.innerHTML = getZero(t.days); // получаем данные из объекта
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) { // если срок истек, останавливаем таймер
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline); // вызываем функцию!

}

export default timer;