import { INNER_WIDTH_XL } from "./common/global"  // Импорт с глобала
// Я писал же 3 раза, вызывай функцию в дом контент лоадед, только после загрузки ДОМ

document.addEventListener('DOMContentLoaded', () => {
	'use strict' //строгий режим

	setBurgerMenu()
})

const setBurgerMenu = () => {
    const burgerButton = document.querySelector('.burger__button')
    const header = document.querySelector('.header')
	const body = document.querySelector('body')

    burgerButton.addEventListener('click', () => {  //Вешаешь класс на хедер и не нужно ничего выдумывать. Задавать классы к кнопкам и так далее
		if(!header.classList.contains('opened')) {
			header.classList.add('opened')
			body.style.overflow = 'hidden'
		} else {
			header.classList.remove('opened')
			body.style.overflow = 'visible'
		}
    })

    window.addEventListener("resize", () => {
        if (window.innerWidth > INNER_WIDTH_XL) {
			header.classList.remove('opened')
        }
    });
}