const bMac = {};

// bMac.animationElement = $('.animationElement');
// let $window = $(window);

// bMac._window.on('scroll resize', bMac.ifVisible);
// bMac._window.trigger('scroll');

// bMac.ifVisible = function() {
//     let windowHeight = bMac._window.height();
//     let windowTop = bMac._window.scrollTop();
//     let windowBottom = (windowTop + windowHeight);

//     $.each(bMac._animationElement, function() {
//         let $element = $(this);
//         let elementHeight = $element.outerHeight();
//         let elementTop = $element.offset().top;
//         let elementBottom = (elementTop + elementHeight);

//         if ((elementBottom >= windowTop) && (elementTop <= windowBottom)) {
//             $element.addClass('inView');
//         } else {
//             $element.removeClass('inView');
//         }
//     });
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
}

$(document).ready(function () {
    bMac.init();
})