const views = {
  email: document.querySelector("#email-view"),
  login: document.querySelector("#login-view"),
  otp: document.querySelector("#otp-view"),
  education: document.querySelector("#education-view"),
  security: document.querySelector("#security-view"),
};

const fields = [
  document.querySelector("#user-input"),
  document.querySelector("#password-input"),
  document.querySelector("#otp-input"),
];

function goTo(viewName) {
  Object.entries(views).forEach(([name, view]) => {
    view.classList.toggle("active", name === viewName);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clearSensitiveFields() {
  fields.forEach((field) => {
    if (field) field.value = "";
  });
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    goTo(button.dataset.go);
  });
});

document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  clearSensitiveFields();
  goTo("otp");
});

document.querySelector("#otp-form").addEventListener("submit", (event) => {
  event.preventDefault();
  clearSensitiveFields();
  goTo("education");
});

document.querySelectorAll("[data-highlight]").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-highlight]")
      .forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#highlight-title").textContent = button.dataset.highlight;
  });
});

window.addEventListener("hashchange", () => {
  const target = window.location.hash.replace("#", "");
  if (views[target]) goTo(target);
});
