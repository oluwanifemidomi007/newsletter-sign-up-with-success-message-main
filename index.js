const submitBtn = document.getElementById("submit-btn");
const submitEl = document.getElementById("submit-el");
const closeEl = document.getElementById("close-btn");
const dismissEl = document.getElementById("dismiss-el");
const emailForm = document.getElementById("email-form");
const mainEl = document.getElementById("main-container");
const secondSection = document.getElementById("second-section");

dismissEl.addEventListener("click", function () {
  submitBtn.style.display = "inline";
  mainEl.style.display = "block";
  secondSection.style.display = "none";
});

emailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  mainEl.style.display = "none";
  secondSection.style.display = "block";
});
