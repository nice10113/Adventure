const navbarToggler = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
let menuOpen = false;

const NavActivate = () => {
  if (!menuOpen) {
    menuOpen = true;
    navbarToggler.classList.add("active");
    navbar.style.opacity = 1;
    navbar.style.pointerEvents = "none";
    navbar.style.transition = "all .4s ease-in-out";
  } else {
    menuOpen = false;
    navbarToggler.classList.remove("active");
    navbar.style.pointerEvents = "all";
    navbar.style.opacity = 0;
    navbar.style.transition = "all .4s ease-in-out";
  }
};

navbarToggler.addEventListener("click", () => {
  NavActivate();
});
