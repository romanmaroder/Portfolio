$(document).ready(function() {
    'use strict';
    //Задаем переменные 
    let navToggleButton = $('.navigation__toogle'),
        navBlock = $('.navigation__list'),
        navBlockOpen = 'navigation__list--open',
        navLink = $('.navigation__list a'),
        navIcon = $('#mobile-menu'),
        navIconActive = 'burger-btn-active',
        navFix = 'navigation__toogle--fixed';

    //Мобильная навигация
    navToggleButton.on('click', function(e) {
        e.preventDefault(); //отменяем стандартное поведение элемента
        navBlock.toggleClass(navBlockOpen);
        navIcon.toggleClass(navIconActive);
        navToggleButton.toggleClass(navFix);
    });

    // По клику по пункту в мобильном меню, удаляем класс и переходим к выбранному пункту

    navLink.on('click', function() {   // Находим в навигации пункты меню (ссылки)
    	navBlock.removeClass(navBlockOpen); // При клике удаляем класс --open 
        navIcon.toggleClass(navIconActive);
        navToggleButton.toggleClass(navFix);
    });
});