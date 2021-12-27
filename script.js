gsap.registerPlugin(ScrollTrigger);
// 
gsap.to('.grow', {
    scrollTrigger: {
        trigger: '.shiftLeft',
        toggleActions: 'restart pause resume reset',
    },
    duration: 3, x: -800
});
gsap.to('.urbrand', {
    scrollTrigger: {
        trigger: '.shiftLeft',
        toggleActions: 'restart pause resume reset',
    },
    duration: 3, x: 800
});

gsap.from('.shiftRight', {
    scrollTrigger: {
        trigger: '.Img2',
        toggleActions: 'restart pause resume reset',
        scrub: 2,
    },
    duration: 10, x: -900
});


gsap.from('.shiftUp1', {
    scrollTrigger: {
        trigger: '.spread',
        toggleActions: 'restart pause resume reset',
        scrub: 2,
    },
    duration: 7, y: 80
});
gsap.from('.shiftUp2', {
    scrollTrigger: {
        trigger: '.Img1',
        toggleActions: 'restart pause resume reset',
        scrub: 2,
    },
    duration: 7, y: 80
});
gsap.to('.spread', {
    scrollTrigger: {
        trigger: '.about',
        toggleActions: 'restart pause resume reset',
        scrub: 2,
    },
    duration: 7, opacity: 0
});


// ABOUT WHITE LINES
gsap.from('.whiteLine', {
    scrollTrigger: {
        trigger: '.whiteLine',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 12, width: "0", stagger: 5.6
});

gsap.from('.whiteLine2', {
    scrollTrigger: {
        trigger: '.whiteLine2',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 12, width: "0%", stagger: 5.6
});

const bMac = {};

bMac.cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    bMac.cursor.setAttribute('style', 'top: '+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+'px;');
});

document.addEventListener('click', () => {
    bMac.cursor.classList.add('expand');
    setTimeout(() => {
        bMac.cursor.classList.remove('expand');
    }, 500)
});