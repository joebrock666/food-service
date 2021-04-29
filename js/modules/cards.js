import {getResource} from '../services/services';

function cards() {

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) { // использование оператора ...rest
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div'); // создаем новый элемент

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element); // если юзер не передал класс в вызове функции, сами добавляем его
            } else {
                this.classes.forEach(className => element.classList.add(className)); // если передал, добавляем этот класс
            }

            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;
            this.parent.append(element); // геним карточки
        }
    }

    getResource('http://localhost:3000/menu') // создаем карточки
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container', 'menu__item').render()
            });
        });

}

export default cards;