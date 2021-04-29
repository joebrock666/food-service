function closeModal(modalSelector) { 
    const modal = document.querySelector(modalSelector); 
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector); 
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = "hidden";

    if(modalTimerId) {
        clearTimeout(modalTimerId);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {

    const modalTrigger = document.querySelectorAll(triggerSelector), // получаем кнопку
    modal = document.querySelector(modalSelector); // получаем модалку саму

    modalTrigger.forEach(btn => { // перебираем все кнопки и добавляем листенер
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId))
    })

    modal.addEventListener('click', (e) => { // при нажатии за пределы модального окна окно должно закрыться
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector); 
        }
    });

    document.addEventListener('keydown', (e) => { // при нажатии на эскейп, окно закрывается
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            // если человек домотал до низа сайта, выскакивает модалка
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal};
export {closeModal};
