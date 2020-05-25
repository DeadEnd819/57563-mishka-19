var btn = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__wrapper");

btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.toggle("main-nav__menu-close")
        /*if (!btn.classList.contains("main-nav__toggle--open") {
                evt.preventDefault();
                btn.classList.add("main-nav__toggle--open")
            } else {
                btn.classList.add("main-nav__toggle--close")
            }
        }*/
});