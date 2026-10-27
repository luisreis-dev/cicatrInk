// HEADER
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.getElementById("navbar-links");
const navLinks = navbarLinks.querySelectorAll("a");

function updateNavbar() {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
}

function closeMenu() {
  menuToggle.classList.remove("active");
  navbarLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navbarLinks.classList.toggle("open");

  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu"
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateNavbar);
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});

updateNavbar();