const body = document.querySelector(".body");
const btnBurger = document.querySelector(".header__burger-menu-button");
const burgerMenu = document.querySelector(".burger-menu");
const btnCloseBurger = document.querySelector(".burger-menu__close-button");
const burgerMenuLinks = document.querySelectorAll(".burger-menu__link");
const subLists = document.querySelectorAll(".burger-menu__sub-list");

const togglePopuptoggleBurger = function () {
    burgerMenu.classList.toggle("popup__is-avtive");
    body.classList.toggle("body__not-active");
    closeBurgerMenu();
}

btnBurger.addEventListener("click", function(e) {
    e.stopPropagation();
    toggleBurger();
});

const closeBurgerMenu = function () {
    btnCloseBurger.addEventListener("click", function() {
        toggleBurger();
    });
}


document.addEventListener("click", function(e) {
    const target = e.target;
    const its_burgerMenu = target == burgerMenu || burgerMenu.contains(target);
    const its_btnBurger = target == btnBurger;
    const burgerMenu_is_active = burgerMenu.classList.contains("burger-menu__is-avtive");
    
    if (!its_burgerMenu && !its_btnBurger && burgerMenu_is_active) {
        toggleBurger();
    }
});

const deactivateSubList = function (arr) {
    for(let i = 0; i <= arr.length - 1; i++) {
        arr[i].classList.add("burger-menu__sub-list--not-active")
    }
}

deactivateSubList(subLists);

const toggleNotActiveClass = function(item) {
    item.nextElementSibling.classList.toggle("burger-menu__sub-list--not-active")
}

burgerMenuLinks.forEach(item => {
    item.addEventListener("click", () => toggleNotActiveClass(item))
})
