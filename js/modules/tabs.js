function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector), 
        // подключаем сами табы, а точнее те дивы при клике на которых будет переключаться контент
        tabsContent = document.querySelectorAll(tabsContentSelector), 
        // подключаем контент табов, а точнее там четыре таба и класс tabscontent у каждого дива с контентом
        tabsParent = document.querySelector(tabsParentSelector); 
        // подключаем родителя первой консты, чтобы заюзать делегирование событий

    function hideTabContent() { 
        tabsContent.forEach(item => {
            item.classList.add('hide', 'fade'); 
            // также добавляется класс фейд, чекни в цсс, он добавляет анимашку
            item.classList.remove('show');
            // проходимся фор ичем по всему контенту табов и скрываем все
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass); 
            // удаляем у всех табов класс активного
        });
    }

    function showTabContent(i = 0) { // дефолтное значение 0
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add(activeClass); 
        // ну собсна добавляем класс активного первому табу и делаем его видным вообще
    }

    hideTabContent(); // вызываем функции, хули
    showTabContent(); 

    tabsParent.addEventListener("click", (event) => { 
        // делегирование событий: обращаемся к родителю табов и будем волшебствовать с классами внутри родителя с самими табами
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) { 
            // если то по чему щелкнули содержит класс таба
            tabs.forEach((item, i) => { 
                // перебираем все классы табов
                if (target == item) {   
                    // если тот класс по которому щелкнули равен тому классу который в фор ич, добавляем ему класс активного и прячем остальной контент
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

}

export default tabs;