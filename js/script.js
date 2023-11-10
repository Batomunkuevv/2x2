"use strict";

const initLozad = () => {
    const lozadElements = document.querySelectorAll('[data-lozad]');

    if (!lozadElements) return;

    lozadElements.forEach(element => {
        const lozadObserver = lozad(element);

        lozadObserver.observe();
    })
}

const initFoldedElements = () => {
    const foldedElements = document.querySelectorAll('[data-fold]');

    if (!foldedElements) return;

    foldedElements.forEach(element => {
        const elementBtn = element.querySelector('[data-fold-btn]');
        const elementContent = element.querySelector('[data-fold-content]');

        heightToggleElement(elementBtn, elementContent)
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

const initBurgerMenu = () => {
    const menu = document.querySelector(".site-header__panel");
    const burger = document.querySelector(".burger");

    if (!menu || !burger) return;

    const menuOverlay = document.querySelector(".site-header__panel-overlay");
    const menuClose = document.querySelector(".site-header__panel-close");

    if (menuClose) menuClose.addEventListener("click", handleMenuCloseClick);
    if (menuOverlay) menuOverlay.addEventListener("click", handleMenuCloseClick);

    burger.addEventListener("click", handleBurgerClick);

    function handleMenuCloseClick() {
        menu.classList.remove("is-open");
        document.body.classList.remove("is-lock");
    }

    function handleBurgerClick() {
        menu.classList.add("is-open");
        document.body.classList.add("is-lock");
    }
};

const initWhatElseSlider = () => {
    const whatElseSlider = document.querySelector('.what-else__slider');

    if (!whatElseSlider) return;

    const options = {
        loop: true,
        speed: 1000,
        simulateTouch: false,
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
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
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            prevEl: reviewsSliderPrev,
            nextEl: reviewsSliderNext,
        },
        fadeEffect: {
            crossFade: true
        },
    }

    const reviewsSliderSwiper = new Swiper(reviewsSlider, options);
}

const initRunningLine = () => {
    const runningLine = document.querySelector('.hero__running-line-slider');

    if (!runningLine) return;

    const options = {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 16,
        loop: true,
        speed: 4000,
        simulateTouch: false,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
        },
        breakpoints: {
            768: {
                spaceBetween: 20
            }
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

    setTimeout(() => setCurrentWidth(firstText), 200);

    titleSliderSwiper.on('slideChange', () => {
        if (window.matchMedia('(max-width: 992px)').matches) return;

        const nextSlideText = titleSlider.querySelector('.swiper-slide-next .hero__title-slider-text');
        setCurrentWidth(nextSlideText);
    })

    function setCurrentWidth(activeText) {
        if (window.matchMedia('(max-width: 992px)').matches) return;

        const activeTextWidth = activeText.getBoundingClientRect().width;
        let activeWidth = Math.round(activeTextWidth / BASE_WIDTH * 100);

        if (activeWidth > 100) {
            activeWidth = 100;
        }

        document.documentElement.style.setProperty('--titleWidth', `${activeWidth}%`);
    }
}

const initProcessSlider = () => {
    const processSlider = document.querySelector('.process-of-work__slider');

    if (!processSlider) return;

    const options = {
        loop: true,
        spaceBetween: 24,
        speed: 1000,
        effect: 'fade',
        simulateTouch: false,
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }

    const processSliderSwiper = new Swiper(processSlider, options)
}

const initValuesSlider = () => {
    const valuesSlider = document.querySelector('.our-values__slider');

    if (!valuesSlider) return;

    const options = {
        loop: true,
        spaceBetween: 24,
        speed: 1000,
        effect: 'fade',
        simulateTouch: false,
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }

    const valuesSliderSwiper = new Swiper(valuesSlider, options)
}

const initTabs = () => {
    const tabsContainers = document.querySelectorAll('[data-tabs-container]');

    if (!tabsContainers);

    tabsContainers.forEach(tabsContainer => {
        const tabsContainerBtns = tabsContainer.querySelectorAll('[data-tab]');
        const tabsContainerTabcontents = tabsContainer.querySelectorAll('[data-tabcontent]');

        tabsContainerBtns.forEach(tab => {
            const tabValue = tab.dataset.tab;
            const tabcontent = Array.from(tabsContainerTabcontents).find(item => item.dataset.tabcontent === tabValue);

            tab.addEventListener('click', () => {
                removeActiveClassesForOther(tabsContainerBtns, 'is-active');
                removeActiveClassesForOther(tabsContainerTabcontents, 'is-active');

                tab.classList.add('is-active');
                tabcontent.classList.add('is-active');
            });
        })
    })
}

const initStoryes = () => {
    const storyes = document.querySelectorAll('.story');

    if (!storyes) return;

    storyes.forEach(story => {
        let storyVideoDuration;
        const storyVideo = story.querySelector('.story__video');
        const isWhite = story.classList.contains('story--is-white');

        storyVideo.addEventListener('loadedmetadata', () => storyVideoDuration = storyVideo.duration);
        storyVideo.addEventListener('timeupdate', () => setCurrentProgress(storyVideo, storyVideoDuration, story, isWhite));
        storyVideo.addEventListener('ended', () => story.classList.add('is-paused'));

        story.addEventListener('click', () => {
            const isPaused = storyVideo.paused;

            if (isPaused) {
                storyVideo.play();
                story.classList.remove('is-paused');
            } else {
                storyVideo.pause();
                story.classList.add('is-paused');
            }
        });
    })

    function setCurrentProgress(storyVideo, duration, story, isWhite = false) {
        if (!duration) duration = storyVideo.duration;

        const color = isWhite ? '#fff' : '#D9D9D9';
        const currentTime = storyVideo.currentTime;
        const percentage = currentTime / duration * 100 + '%';

        story.style.background = `conic-gradient(${color} ${percentage}, transparent 0)`;
    }
}

const initAlreadyUseSwitch = () => {
    const alreadyUseSection = document.querySelector('.already-use');

    if (!alreadyUseSection) return;

    const alreadyUseBtn = alreadyUseSection.querySelector('.already-use__btn--no-tab');
    const alreadyUseTabs = alreadyUseSection.querySelectorAll('[data-use]');

    if (alreadyUseBtn && alreadyUseTabs) setTimeout(initTabs, 300);

    function initTabs() {
        const yesText = alreadyUseBtn.dataset.yesText;
        const noText = alreadyUseBtn.dataset.noText;
        const yesWidth = initWidth(yesText);
        const noWidth = initWidth(noText);

        alreadyUseTabs.forEach(tab => {
            const tabValue = tab.dataset.use;
            alreadyUseBtn.style.width = `${yesWidth}px`;

            tab.addEventListener('click', () => {
                removeActiveClassesForOther(alreadyUseTabs, 'is-active');
                tab.classList.add('is-active');

                if (tabValue === 'no') {
                    setCurrentText(noText, noWidth);
                    setLightClasses();
                } else {
                    setCurrentText(yesText, yesWidth);
                    setDarkClasses();
                }

            })
        })

        function setCurrentText(text, newWidth) {
            alreadyUseBtn.style.width = `${newWidth}px`;
            alreadyUseBtn.textContent = text;
        }

        function initWidth(text) {
            let width;
            let oldText = alreadyUseBtn.textContent;

            alreadyUseBtn.textContent = text;
            width = alreadyUseBtn.getBoundingClientRect().width;
            alreadyUseBtn.textContent = oldText;

            return width;
        }

        function setLightClasses() {
            alreadyUseSection.classList.add('is-light');
            alreadyUseBtn.classList.remove('btn--white');

            alreadyUseTabs.forEach(tab => {
                tab.classList.remove('btn--white');
            })
        }

        function setDarkClasses() {
            alreadyUseSection.classList.remove('is-light');
            alreadyUseBtn.classList.add('btn--white');

            alreadyUseTabs.forEach(tab => {
                tab.classList.add('btn--white')
            })
        }
    }



}

function removeActiveClassesForOther(array, activeClass) {
    array.forEach(item => item.classList.remove(activeClass))
}

function heightToggleElement(toggler, blocks) {
    toggler.addEventListener("click", (e) => {
        e.preventDefault();
        if (blocks instanceof NodeList) {
            blocks.forEach(function (block) {
                addFunctionality(toggler, block);
            });
        } else {
            addFunctionality(toggler, blocks);
        }
    });

    function addFunctionality(toggler, block) {
        if (block.style.height === "0px" || !block.style.height) {
            block.style.height = `${block.scrollHeight}px`;
            toggler.classList.add("is-active");
            block.classList.add("is-expanded");
        } else {
            block.style.height = `${block.scrollHeight}px`;
            window.getComputedStyle(block, null).getPropertyValue("height");
            block.style.height = "0";
            toggler.classList.remove("is-active");
            block.classList.remove("is-expanded");
        }

        block.addEventListener("transitionend", () => {
            if (block.style.height !== "0px") {
                block.style.height = "auto";
            }
        });
    }
}

function initSmoothScroll() {
    if (!gsap) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (ScrollTrigger.isTouch !== 1) {
        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.wrapper__content',
            smooth: 1.5
        });
    }
}

window.addEventListener("DOMContentLoaded", (e) => {
    initLozad();
    initSmoothScroll();
    initTabs();
    initFoldedElements();
    initHeader();
    initBurgerMenu();
    initWhatElseSlider();
    initReviewsSlider();
    initRunningLine();
    initTitleSlider();
    initProcessSlider();
    initValuesSlider();
    initStoryes();
    initAlreadyUseSwitch();
});
