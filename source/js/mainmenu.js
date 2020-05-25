var btn = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__wrapper");

document.addEventListener("DOMContentLoaded", function() {
    btn.classList.remove(".main-nav__toggle-hidden");
    btn.classList.add("main-nav__toggle-visible");
});

btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.toggle("main-nav__menu-close");
});
