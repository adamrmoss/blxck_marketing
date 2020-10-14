gsap.registerPlugin(ScrollTrigger);
// TODO >> HEADER TOGGLE ON CLICK 
// TODO safari ?!?!?
// TODO clean gsap anims 


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


const bMac = {};

bMac.contact = $('.contactClick');
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


// TOGGLE HEADER IMAGE FUNCTION 
bMac.loadHeader = 2;

document.querySelector('.arrow').onclick = () => {
  
    if (bMac.loadHeader === 1) {
        $('#headerImg3').css('z-index', '-10');
        setTimeout(() => {
            $('#headerImg1')
                .css('width', '100%')
                .css('z-index', '-9');
        }, 200);
        setTimeout(() => {
            $('#headerImg3').css('width', '0');
        }, 800);
    } else {
        $('#headerImg'+bMac.loadHeader)
            .css('width', '100%')
            .css('z-index', '-9');
    }
    
    let previousImg = bMac.loadHeader - 1;

    if (bMac.loadHeader === 3) {
        bMac.loadHeader = 1;
    } else if (bMac.loadHeader === 1) {
        previousImg = 3;
        bMac.loadHeader++;
    } else {
        bMac.loadHeader++;
    }
    
    if (bMac.loadHeader !== 2) {
        setTimeout(() => {
            $('#headerImg' + previousImg)
                .css('width', '0')
                .css('z-index', '-10');
        }, 800);
    }
}


bMac.contactModal = function() {
    bMac.contact.click(function () {
        $('.modal').toggleClass(`activeView`);
    })
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
    bMac.contactModal();
}

$(document).ready(function () {
    bMac.init();
})