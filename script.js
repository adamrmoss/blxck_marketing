gsap.registerPlugin(ScrollTrigger);
// TODO >> HEADER TOGGLE ON CLICK 
// TODO >> HORIZONTAL SCROLL ON visualIMAGE SECTION WITH SIZING 
// TODO FOOTER
// RESPONSIVENESS
// clean gsap anims
// fix height of projects section

// gsap.from('.headerImg', {
//     // trigger: '.arrow',
//     duration: 2,
//     stagger: 8,
//     width: 0,
// })

// 
gsap.from('.shiftLeft', {
    scrollTrigger: {
        trigger: '.shiftLeft',
        toggleActions: 'restart pause resume reset',
        scrub: 3,
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
        // toggleActions: 'restart pause resume reset',
        scroller: '.visualArtSection',
        // horizontal: true,
        scrub: true,
    },
    duration: 1, scale: 1.5,
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

// set a number value variable
bMac.loadHeader = 2;

document.querySelector('.arrow').onclick = () => {
  
    // on click, give all header images a z-index -9 (bring to front) and width 100
    $('#headerImg'+bMac.loadHeader).css('width', '100%').css('z-index', '-9');

    // after the above runs per image
    setTimeout(() => {
        // create a variable to hold the valuefor the previous image
        // this is what wont work for when the image is image1 because 1 - 1 is 0
        const previousImg = bMac.loadHeader - 1;
        // add width:0 to the image that just left
        $('#headerImg'+previousImg).css('width', '0'); 
        // if it's img3 right now, make it 1
        // this is to account for restart
        if (bMac.loadHeader == 3) {
            bMac.loadHeader = 1;
        } else if (bMac.loadHeader == 1) {
            previousImg = 3;
        } else {
            // otherwise continue to increment that global variable up by one 
            bMac.loadHeader++;
        }
        // this whole mess will take 800ms because thats how long i set my transiton time to.
    }, 800);

    // NEW SET TIMEOUT
    setTimeout(() => {
        // waits until both images have moved and drops the z-index of the current image to -10?? this doesnt quite make sense to me
        $('#headerImg'+bMac.loadHeader).css('z-index', '-10'); 
    }, 1600);
    
}

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