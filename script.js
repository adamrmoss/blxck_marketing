const brennaMacQuarrie = {};

// function to make my burger menu appear
brennaMacQuarrie.hamburger = function () {
    $(`.hamburg`).click(function () {
        $(this).toggleClass(`active`);
        $(`.dropdownMenu`).toggleClass(`active`);
    });
}

brennaMacQuarrie.init = function() {
    brennaMacQuarrie.hamburger();
}

$(document).ready(function () {
    brennaMacQuarrie.init();
})