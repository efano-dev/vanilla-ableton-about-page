const navMobileMenu = document.getElementById("navMobileMenu");
const navMobileList = document.getElementById("navMobileList");
const navMobile = document.getElementById("navMobile");
const navMobileLogo = document.getElementById("navMobileLogo");

navMobileMenu.addEventListener("click", (event) => {
    navMobile.classList.toggle("nav--mobile--active");
    navMobileMenu.classList.toggle("nav__link--mobile");
    navMobileLogo.classList.toggle("nav__logo--mobile");
    navMobileList.classList.toggle("nav__list--mobile--active");
});