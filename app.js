document.addEventListener("DOMContentLoaded", function () {
  var myScrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#myNavbar",
  });
});

const dateEl = document.querySelector('.date')

dateEl.textContent = new Date().getFullYear()