var menu = document.querySelector(".navbar-menu-toggle");
var sideNav = document.querySelector(".side-navbar");

menu.addEventListener("click", function () {
    sideNav.style.left = "0"
})

sideNav.addEventListener("click", function () {
    sideNav.style.left = "-115%";
})