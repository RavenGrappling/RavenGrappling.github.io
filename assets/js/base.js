window.onload = initNav;

function initNav() {
  const navCollapseButton = document.querySelector("[data-nav-toggle]");
  navCollapseButton.addEventListener("click", toggleNav);
  const mainEl = document.querySelector("main");
  mainEl.addEventListener("click", closeNav);
}

function toggleNav(event) {
  event.stopPropagation();
  const navbar = document.querySelector("[data-nav]");
  navbar.classList.toggle("show");
}

function closeNav(event) {
  navbar = document.querySelector("[data-nav]");
  navbar.classList.remove("show");
}
