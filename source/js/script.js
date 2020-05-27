var btn = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__wrapper");


btn.classList.remove('main-nav__toggle-hidden');
btn.classList.add('main-nav__toggle--open');

btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.toggle('main-nav__menu-close');

    if (btn.classList.contains('main-nav__toggle--open')) {
        btn.classList.add('main-nav__toggle--close');
    } else {
        btn.classList.remove('main-nav__toggle--close');
    }
});
