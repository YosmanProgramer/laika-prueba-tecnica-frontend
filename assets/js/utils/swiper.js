// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay]);

// init swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 600,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

const swiper2 = new Swiper('.swiper2', {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 60,

    speed: 600,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 5,
            spaceBetween: 70,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 5,
        },
        // when window width is >= 1536px
        1536: {
            slidesPerView: 6,
            spaceBetween: 80
        }
    }
})


