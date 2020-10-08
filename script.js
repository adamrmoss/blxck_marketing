gsap.registerPlugin(ScrollTrigger);

// 
gsap.from('.shiftLeft', {
    scrollTrigger: {
        trigger: '.shiftLeft',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 7, x: 900
});

// PROJECT JUMP
gsap.from('.peach', {
    scrollTrigger: {
        trigger: '.peach',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 1, x: -90
});
    
gsap.from('.quickExg', {
    scrollTrigger: {
        trigger: '.quickExg',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 1, x: 90
});
        
gsap.from('.justLucy', {
    scrollTrigger: {
        trigger: '.justLucy',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 1, x: -90
});

// ABOUT WHITE LINES
gsap.from('.whiteLine', {
    scrollTrigger: {
        trigger: '.whiteLine',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 12, width: "0%", stagger: 1.5});


// VISUAL ART SCROLL
gsap.from('.displayVisual', {
    scrollTrigger: {
        trigger: '.displayVisual',
                    // enter, endpoint, reenter, fromtop
        toggleActions: 'restart pause resume reset',
        scroller: '.visualArtSection',
        horizontal: true,
        scrub: true,
    },
    duration: 1, scale: 2,
});


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