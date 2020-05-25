var btn = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__wrapper");

btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.toggle("main-nav__menu-close")
});