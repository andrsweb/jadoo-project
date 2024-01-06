import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initCatalogSlider()
})

const initCatalogSlider = () => {
    new Swiper('.swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 50,
        effect: "creative",
        enteredSlides: true,
        grabCursor: true,

        modules: [Navigation, Pagination],
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-slide-button-next',
            prevEl: '.swiper-slide-button-prev',
        },
    });
}