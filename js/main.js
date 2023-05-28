const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
const body = document.querySelector(".body");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  navbar.classList.toggle("active");
  body.classList.toggle("lock");
});

const prevButton = document.querySelector(".slider__button.prev-button");
const nextButton = document.querySelector(".slider__button.next-button");
const slider = document.querySelector(".slider__container_item");

// Функція для переміщення слайдів вперед або назад
const slide = (direction) => {
  const slideWidth = slider.offsetWidth;
  const currentScrollPosition = slider.scrollLeft;
  const numSlides = slider.querySelectorAll(".slider__slide").length;
  const offset = direction === "next" ? slideWidth : -slideWidth;
  let newPosition = currentScrollPosition + offset;

  if (newPosition < 0) {
    newPosition = 0;
  } else if (newPosition > slideWidth * (numSlides - 1)) {
    newPosition = slideWidth * (numSlides - 1);
  }

  slider.scrollBy({
    left: newPosition - currentScrollPosition,
    behavior: "smooth",
  });
};

// Додавання обробників подій для кнопок
prevButton.addEventListener("click", () => slide("prev"));
nextButton.addEventListener("click", () => slide("next"));

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".faq__report_button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      this.classList.toggle(
        "active"
      ); /* Додаємо/видаляємо клас "active" при натисканні */
    });
  });
});
