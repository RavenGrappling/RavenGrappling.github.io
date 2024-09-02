window.onload = initNav;

function initNav() {
  const navCollapseButton = document.querySelector("[data-nav-toggle]");
  navCollapseButton.addEventListener("click", toggleNav);

  document.querySelectorAll("[data-nav-dropdown]").forEach((element) => {
    element.addEventListener("click", toggleDropdown);
  });
}

function toggleNav(event) {
  event.preventDefault();
  document.querySelector("[data-nav]").classList.toggle("show");
}

function toggleDropdown(event) {
  event.preventDefault();
  event.currentTarget.nextElementSibling.classList.toggle("show");
}
