"use strict";

const initLozad = () => {
    const lozadElements = document.querySelectorAll('[data-lozad]');

    if (!lozadElements) return;

    lozadElements.forEach(element => {
        const lozadObserver = lozad(element);

        lozadObserver.observe();
    })
}

const initHeader = () => {
    const header = document.querySelector('.site-header');

    if (!header) return;

    let lastScrollTop;

    window.addEventListener('scroll', toggleScrollingClass);
    window.addEventListener('scroll', animateHeader);

    function animateHeader() {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 0) {
            header.classList.add('is-scrolling-down');
        } else {
            header.classList.remove('is-scrolling-down');
        }

        lastScrollTop = scrollTop;
    }

    function toggleScrollingClass() {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 0) {
            header.classList.add('is-scrolling');
        } else {
            header.classList.remove('is-scrolling');
        }
    }
}

const initWhatElseSlider = () => {
    const whatElseSlider = document.querySelector('.what-else__slider');

    if (!whatElseSlider) return;

    const options = {
        loop: true,
        autoHeight: true,
        speed: 1000,
        simulateTouch: false,
        allowTouchMove: false,
        autoplay: {
            delay: 3000
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    }

    const whatElseSliderSwiper = new Swiper(whatElseSlider, options);
}

const initReviewsSlider = () => {
    const reviewsSlider = document.querySelector('.reviews__slider');

    if (!reviewsSlider) return;

    const reviewsSliderPrev = reviewsSlider.querySelector('.is-prev');
    const reviewsSliderNext = reviewsSlider.querySelector('.is-next');

    const options = {
        loop: true,
        effect: 'fade',
        speed: 750,
        simulateTouch: false,
        autoplay: {
            delay: 3000
        },
        navigation: {
            prevEl: reviewsSliderPrev,
            nextEl: reviewsSliderNext,
        },
        fadeEffect: {
            crossFade: true
        }
    }

    const reviewsSliderSwiper = new Swiper(reviewsSlider, options);
}

const initRunningLine = () => {
    const runningLine = document.querySelector('.hero__running-line-slider');

    if (!runningLine) return;

    const options = {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        speed: 4000,
        simulateTouch: false,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
        }
    }

    const runningLineSwiper = new Swiper(runningLine, options)
}

const initTitleSlider = () => {
    const titleSlider = document.querySelector('.hero__title-slider');

    if (!titleSlider) return;

    const BASE_WIDTH = titleSlider.getBoundingClientRect().width;

    const options = {
        loop: true,
        autoHeight: true,
        speed: 500,
        effect: 'fade',
        simulateTouch: false,
        allowTouchMove: false,
        autoplay: {
            delay: 2000
        },
        fadeEffect: {
            crossFade: true
        }
    }

    const titleSliderSwiper = new Swiper(titleSlider, options)
    const firstText = titleSlider.querySelector('.swiper-slide-active .hero__title-slider-text');

    setTimeout(() => setCurrentWidth(firstText), 50);

    titleSliderSwiper.on('slideChange', () => {
        const nextSlideText = titleSlider.querySelector('.swiper-slide-next .hero__title-slider-text');
        setCurrentWidth(nextSlideText);
    })

    function setCurrentWidth(activeText) {
        const activeTextWidth = activeText.getBoundingClientRect().width;
        let activeWidth = Math.round(activeTextWidth / BASE_WIDTH * 100);

        if (activeWidth > 100) {
            activeWidth = 100;
        }

        document.documentElement.style.setProperty('--titleWidth', `${activeWidth}%`);
    }
}

window.addEventListener("DOMContentLoaded", (e) => {
    initLozad();
    initSmoothScroll();
    initHeader();
    initWhatElseSlider();
    initReviewsSlider();
    initRunningLine();
    initTitleSlider();
});
