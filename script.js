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
    // new WOW().init();
}

$(document).ready(function () {
    bMac.init();
})