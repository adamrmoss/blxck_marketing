gsap.registerPlugin(ScrollTrigger);
// TODO >> HEADER TOGGLE ON CLICK 
// TODO >> HORIZONTAL SCROLL ON visualIMAGE SECTION WITH SIZING 
// TODO FOOTER
// RESPONSIVENESS

gsap.from('.headerImg', {
    // trigger: '.arrow',
    duration: 2,
    stagger: 8,
    width: 0,
})
document.querySelector('.arrow').onclick = () => {
    console.log('oh hey')
    // toggle images
}
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
    duration: 1, x: "-90"
});


// ABOUT ME TEXT ROLL 
// TODO fix meeee
gsap.from('.aboutP1', {
    scrollTrigger: {
        trigger: '.aboutP1',
        toggleActions: 'restart pause resume reset',
        scrub: false,
    },
    duration: 1.8, height: "0", stagger: 1.7
})
gsap.from('.aboutP2', {
    scrollTrigger: {
        trigger: '.aboutP2',
        toggleActions: 'restart pause resume reset',
        scrub: false,
    },
    duration: 1.8, height: "0", stagger: 1.7
})
gsap.from('.aboutP3', {
    scrollTrigger: {
        trigger: '.aboutP3',
        toggleActions: 'restart pause resume reset',
        scrub: false,
    },
    duration: 1.8, height: "0", stagger: 1.7
})
gsap.from('.aboutP4', {
    scrollTrigger: {
        trigger: '.aboutP4',
        toggleActions: 'restart pause resume reset',
        scrub: false,
    },
    duration: 1.8, height: "0", stagger: 1.7
})
gsap.from('.aboutP5', {
    scrollTrigger: {
        trigger: '.aboutP5',
        toggleActions: 'restart pause resume reset',
        scrub: false,
    },
    duration: 1.8, height: "0", stagger: 1.7
})

// ABOUT WHITE LINES
// TODO can these be on their own scroll??? why aren't they on their own scroll???
gsap.from('.whiteLine', {
    scrollTrigger: {
        trigger: '.whiteLine',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 12, width: "0%", stagger: 5.6
});

gsap.from('.whiteLine2', {
    scrollTrigger: {
        trigger: '.whiteLine2',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 12, width: "0%", stagger: 5.6
});

gsap.from('.skillDiv i', {
    scrollTrigger: {
        trigger: '.skillDiv i',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 12, fontSize: '0.2rem', stagger: 5.6
});

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

bMac.cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    bMac.cursor.setAttribute('style', 'top: '+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+'px;');
})

document.addEventListener('click', () => {
    bMac.cursor.classList.add('expand');
    setTimeout(() => {
        bMac.cursor.classList.remove('expand');
    }, 500)
})


//function to scroll header images on button click
// bMac.scrollHeader = function() {
//     bMac.imageClick.on('click', function() {
//         console.log('arrow clicked!');
//         bMac.headerImageMotion.css('width', '0');
//     })
// }

// function to make my burger menu appear
bMac.hamburger = function () {
    $(`.hamburg`).click(function () {
        $(this).toggleClass(`active`);
        $(`.dropdownMenu`).toggleClass(`active`);
    });
}

bMac.init = function() {
    bMac.hamburger();
    // bMac.scrollHeader();
}

$(document).ready(function () {
    bMac.init();
})