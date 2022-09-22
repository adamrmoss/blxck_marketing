gsap.registerPlugin(ScrollTrigger);

const toggleActions = "restart pause resume reset"
gsap.to('.grow', {
    scrollTrigger: {
        trigger: '.shiftLeft',
        toggleActions,
        scrub: true
    },
    duration: 3, x: -800
});
gsap.to('.urbrand', {
    scrollTrigger: {
        trigger: '.shiftLeft',
        toggleActions,
        scrub: true
    },
    duration: 3, x: 800
});

gsap.to('.shiftLeft1', {
    scrollTrigger: {
        trigger: '#about-us',
        toggleActions,
        scrub: 2,
    },
    duration: 10, x: -500
});
gsap.to('.shiftRight1', {
    scrollTrigger: {
        trigger: '#what-we-do',
        toggleActions,
        scrub: 2,
    },
    duration: 10, x: 600
});
gsap.to('.shiftLeft2', {
    scrollTrigger: {
        trigger: '#our-services',
        toggleActions,
        scrub: 2,
    },
    duration: 10, x: -650
});
gsap.to('.shiftRight2', {
    scrollTrigger: {
        trigger: '#contact',
        toggleActions,
        scrub: 2,
    },
    duration: 10, x: 800
});

gsap.to('.fade', {
    scrollTrigger: {
        trigger: '#about-us',
        toggleActions,
        scrub: 2,
    },
    duration: 7, opacity: 0
});


gsap.from('.whiteLine', {
    scrollTrigger: {
        trigger: '.whiteLine',
        toggleActions,
        scrub: true,
    },
    duration: 5, width: "0", stagger: 1
});

gsap.from('.whiteLine2', {
    scrollTrigger: {
        trigger: '.whiteLine2',
        toggleActions,
        scrub: true,
    },
    duration: 8, width: "0", stagger: 1
});



const nav = document.getElementById('nav')

const showHideHeader = gsap.from(nav, {
    yPercent: -100,
    duration: 0.1,
    ease: "sine.out"
})

ScrollTrigger.create({
    start: "top top",
    onUpdate: (self) => {
        if (self.direction === -1) showHideHeader.play();
        else showHideHeader.reverse();
    }
})

function toggleText(el) {
    const text = el.nextElementSibling;
    
    if (el.classList.contains('open')) {
        el.innerText = "SHOW MORE"
        el.classList.remove('open')
        gsap.to(text, {
            duration: 0.5, height: "0px"
        });
    } else {
        el.innerText = "SHOW LESS"
        el.classList.add('open')
        gsap.to(text, {
            duration: 0.5, height: "100%", opacity: 1
        });
    }
}

const cursor = document.querySelector('.cursor');
const startTime = Date.now();

let pageX;
let pageY;
let xDisplacement;
let yDisplacement


document.addEventListener('mousemove', e => {
    pageX = e.pageX;
    pageY = e.pageY;
});

function onAnimationFrame(timestamp) {
    const period = 2000;

    const totalTimeElapsed = timestamp - startTime;
    const phase = (totalTimeElapsed % period) / period;
    const angle = phase * 2 * Math.PI;
    const radius = 80;
    const xDisplacement = Math.cos(angle) * radius;
    const yDisplacement = Math.sin(angle) * radius;

    cursor.setAttribute('style', 'top: '+(pageY + yDisplacement - 20)+"px; left: "+(pageX + xDisplacement - 20)+'px;');
    //cursor.setAttribute()

    window.requestAnimationFrame(onAnimationFrame);
};

window.requestAnimationFrame(onAnimationFrame);

document.addEventListener('click', () => {
    cursor.classList.add('expand');
    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500)
});

