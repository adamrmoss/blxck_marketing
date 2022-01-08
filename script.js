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
    duration: 10, x: 600
});
gsap.to('.shiftLeft2', {
    scrollTrigger: {
        trigger: '.why',
        toggleActions,
        scrub: 2,
    },
    duration: 10, x: -600
});


// gsap.from('.shiftUp1', {
//     scrollTrigger: {
//         trigger: '.spread',
//         toggleActions,
//         scrub: 2,
//     },
//     duration: 7, y: 90
// });
// gsap.from('.shiftUp2', {
//     scrollTrigger: {
//         trigger: '.Img1',
//         toggleActions,
//         scrub: 2,
//     },
//     duration: 7, y: 80
// });
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


// $(function() {
//     var canvas = document.createElement("canvas");
//     canvas.width = 24;
//     canvas.height = 24;
//     //document.body.appendChild(canvas);
//     var ctx = canvas.getContext("2d");
//     ctx.fillStyle = "#000000";
//     ctx.font = "24px FontAwesome";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText("\uf002", 12, 12);
//     var dataURL = canvas.toDataURL('image/png')
//     $('body').css('cursor', 'url('+dataURL+'), auto');
// });

const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute('style', 'top: '+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+'px;');
// });

// document.addEventListener('click', () => {
//     cursor.classList.add('expand');
//     setTimeout(() => {
//         cursor.classList.remove('expand');
//     }, 500)
// });

function toggleText(el) {
    const text = el.nextElementSibling;
    text.classList.toggle('hidden');

    if (el.innerText === "SHOW MORE") {
        el.innerText = "SHOW LESS";
      } else {
        el.innerText = "SHOW MORE";
      }
}





