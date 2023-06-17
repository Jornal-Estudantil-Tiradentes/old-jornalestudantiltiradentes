const navbar = document.querySelector(".navbar");
const navOpenBtn = document.querySelector(".header__btn");
const navCloseBtn = document.querySelector(".navbar__btn");

function showNavbar() {
  navbar.classList.remove("navbar--hidden");
}

function hideNavbar() {
  navbar.classList.add("navbar--hidden");
}

navOpenBtn.addEventListener("click", showNavbar);

navCloseBtn.addEventListener("click", hideNavbar);
