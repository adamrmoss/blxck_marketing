// AOS.init();
gsap.registerPlugin(ScrollTrigger);

gsap.from('.shiftLeft', {
    scrollTrigger: {
        trigger: '.shiftLeft',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 7, x: 900});

// animates between states
gsap.from('.proj', {
    scrollTrigger: {
        trigger: '.proj',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 1, opacity: 0, y: 190});

gsap.from('.whiteLine', {
    scrollTrigger: {
        trigger: '.whiteLine',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 8, width: "0%", stagger: 1.5});

const bMac = {};



// function to make my burger menu appear
bMac.hamburger = function () {
    $(`.hamburg`).click(function () {
        $(this).toggleClass(`active`);
        $(`.dropdownMenu`).toggleClass(`active`);
    });
}

bMac.init = function() {
    bMac.hamburger();
}

$(document).ready(function () {
    bMac.init();
})