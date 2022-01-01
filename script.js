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

gsap.to('.shiftRight', {
    scrollTrigger: {
        trigger: '.shiftRight',
        toggleActions: 'restart pause resume reset',
        scrub: 2,
    },
    duration: 10, x: -600
});


gsap.from('.shiftUp1', {
    scrollTrigger: {
        trigger: '.spread',
        toggleActions: 'restart pause resume reset',
        scrub: 2,
    },
    duration: 7, y: 90
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
    duration: 8, width: "0", stagger: 1
});

gsap.from('.whiteLine2', {
    scrollTrigger: {
        trigger: '.whiteLine2',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 8, width: "0", stagger: 1
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: '+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+'px;');
});

document.addEventListener('click', () => {
    cursor.classList.add('expand');
    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500)
});

function toggleText(el) {
    const text = el.nextElementSibling;
    text.classList.toggle('hidden');

    if (el.innerText === "SHOW MORE") {
        el.innerText = "SHOW LESS";
      } else {
        el.innerText = "SHOW MORE";
      }
}