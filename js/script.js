const navbarMenu = document.querySelector(".navbar-menu"),
    navBurger = document.querySelector("#navbar-btn-burger");

navBurger.onclick = () => {
    navbarMenu.classList.toggle("active");
};

document.addEventListener("click", function (e) {
    if (!navBurger.contains(e.target) && !navbarMenu.contains(e.target))
        navbarMenu.classList.remove("active");
});
