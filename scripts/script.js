import { webPageURL } from "./global_variables.js";

const anchorTags = document.getElementsByTagName("a");

[...anchorTags].forEach((anchorTag) => {
    anchorTag.href = webPageURL;
});

const navMobileMenu = document.getElementById("navMobileMenu");
const navMobileList = document.getElementById("navMobileList");
const navMobile = document.getElementById("navMobile");
const navMobileLogo = document.getElementById("navMobileLogo");

navMobileMenu.addEventListener("click", (event) => {
    navMobile.classList.toggle("nav--mobile--active");
    navMobileMenu.classList.toggle("nav__link--mobile");
    navMobileLogo.src = "./assets/images/nav-logo-white.svg";
    navMobileList.classList.toggle("nav__list--mobile--active");
});