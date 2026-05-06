window.onload = () => {
  document
    .querySelector("[data-nav-toggle]")
    .addEventListener("click", toggleNav);

  document.querySelectorAll("[data-nav-button]").forEach((element) => {
    element.addEventListener("click", toggleDropdown);
  });

  // click away for navigation popups
  const nav = document.querySelector("[data-nav]")
  window.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
      document.querySelectorAll("[data-nav-dropdown").forEach((element) => {
        element.classList.remove("show");
      })
    }
  })

  const leadsForm = document.querySelector("[data-leads-form]");
  if (leadsForm) {
    leadsForm.addEventListener("submit", processLeadsForm);
  }

  const scrollButton = document.querySelector("[data-scroll-button]");
  if (scrollButton) {
    scrollButton.addEventListener("click", scrollToForm);
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

function scrollToForm(event) {
  event.preventDefault();
  const formId = event.currentTarget.getAttribute("href");
  const form = document.querySelector(formId);

  const topCoord = form.offsetTop - 70;
  window.scrollTo({ top: topCoord, behavior: "smooth" });
}

function processLeadsForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);

  // changing action from html value of `form.action`
  const action = "https://formspree.io/f/maqnrybv";

  fetch(action, {
    method: "post",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
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
