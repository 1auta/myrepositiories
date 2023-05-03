const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
const body = document.querySelector(".body");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  navbar.classList.toggle("active");
  body.classList.toggle("lock");
});
