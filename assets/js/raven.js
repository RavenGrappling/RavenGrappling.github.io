window.onload = () => {
  document
    .querySelector("[data-nav-toggle]")
    .addEventListener("click", toggleNav);

  document.querySelectorAll("[data-nav-dropdown]").forEach((element) => {
    element.addEventListener("click", toggleDropdown);
  });

  const leadsForm = document.querySelector("[data-leads-form]");
  if (leadsForm) {
    leadsForm.addEventListener("submit", processLeadsForm);
  }

  const leadsFormLink = document.querySelector("[data-leads-form-link]");
  if (leadsFormLink) {
    leadsFormLink.addEventListener("click", scrollToLeadsForm);
  }
};

function toggleNav(event) {
  event.preventDefault();
  document.querySelector("[data-nav]").classList.toggle("show");
}

function toggleDropdown(event) {
  event.preventDefault();
  event.currentTarget.nextElementSibling.classList.toggle("show");
}

function scrollToLeadsForm(event) {
  event.preventDefault();
  const leadsForm = document.querySelector("[data-leads-form]");
  const topCoord = leadsForm.offsetTop - 70;
  window.scrollTo({ top: topCoord, behavior: "smooth" });
}

function processLeadsForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);

  fetch(form.action, { method: "post", body: data })
    .then((response) => {
      if (response.ok) {
        form.classList.add("success");
      } else {
        form.classList.add("failure");
      }
    })
    .catch((error) => {
      form.classList.add("failure");
    });
}
