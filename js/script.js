import tabs from './modules/tabs';
import calc from './modules/calc';
import cards  from './modules/cards';
import forms  from './modules/forms';
import timer  from './modules/timer';
import slider from './modules/slider';
import modal  from './modules/modal';
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-11-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});
