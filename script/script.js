'use strict';
document.addEventListener('DOMContentLoaded', () => {

 // Экранная клавиатура
 {
    const keyboardButton = document.querySelector('.search-form__keyboard');
    const keyboard = document.querySelector('.keyboard');
    const closeKeyboard = document.getElementById('close-keyboard');
    const searchInput = document.querySelector('.search-form__input');

    const toggleKeyboard = () => keyboard.style.top = keyboard.style.top ? '' : '50%';

    const typing = event => {
       const target = event.target;

       if (target.tagName.toLowerCase() === 'button') {
        // console.log(target.textContent.trim());
        searchInput.value += target.textContent.trim();
       }
       // backspace
       // space
    };

    keyboardButton.addEventListener('click', toggleKeyboard);
    closeKeyboard.addEventListener('click', toggleKeyboard);
    keyboard.addEventListener('click', typing);
 }

 // Menu

 {
    const burger = document.querySelector('.spinner');
    const sidebarMenu = document.querySelector('.sidebarMenu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active'); 
        sidebarMenu.classList.toggle('rollUp');
    });

    sidebarMenu.addEventListener('click', e => {
        let target = e.target;
        // console.log(target.closest('a[href="#"]'));
        target = target.closest('a[href="#"]');

        if (target) {
            // const parentTarget = target.parentNode;
            const parentTarget = target.parentElement;
            // console.log(parentTarget);
            // parentTarget.classList.add('active');
            sidebarMenu.querySelectorAll('li').forEach(elem => {
                
                // elem.classList.toggle('active')
                
                if (elem === parentTarget) {
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            })
            // console.log(sidebarMenu.querySelectorAll('li'));
        }
    })
 }


 // Модальное окно
{
    const divYoutuber = document.createElement('div');
}


});