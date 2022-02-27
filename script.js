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

gsap.to('.shiftRight1', {
    scrollTrigger: {
        trigger: '.what',
        toggleActions,
        scrub: 2,
    },
    duration: 10, x: 600
});
gsap.to('.shiftLeft1', {
    scrollTrigger: {
        trigger: '.about',
        toggleActions,
        scrub: 2,
    },
    duration: 10, x: -600
});
gsap.to('.shiftRight2', {
    scrollTrigger: {
        trigger: '.contact',
        toggleActions,
        scrub: 2,
    },
    duration: 10, x: 800
});
gsap.to('.shiftLeft2', {
    scrollTrigger: {
        trigger: '.why',
        toggleActions,
        scrub: 2,
    },
    duration: 10, x: -600
});

gsap.to('.fade', {
    scrollTrigger: {
        trigger: '.about',
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
    duration: 8, width: "0", stagger: 1
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

const cursor = document.querySelector('.cursor')
function toggleText(el) {
    const text = el.nextElementSibling;
    text.classList.toggle('hidden');

    if (el.innerText === "SHOW MORE") {
        el.innerText = "SHOW LESS";
      } else {
        el.innerText = "SHOW MORE";
      }
}





