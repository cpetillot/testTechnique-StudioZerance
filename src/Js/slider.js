let position = 0;

const $leftArrow = document.querySelector(".slider__arrow--left");
const $rightArrow = document.querySelector(".slider__arrow--right");
const $slides = document.querySelector(".slider__slides");

$slides.appendChild(document.querySelector(".slider__slide").cloneNode());
const sliderLength = document.querySelectorAll(".slider__slide").length;
const allSlidesWidth = $slides.offsetWidth;
const slideWidth = allSlidesWidth / sliderLength;

$leftArrow.addEventListener("click", left);
$rightArrow.addEventListener("click", right);

function left() {
  if (position === 0) {
    position = sliderLength - 1;
    jump(left);
  } else {
    position--;
    move();
  }
}

function right() {
  position++;
  move();

  if (position === sliderLength - 1) {
    setTimeout(function () {
      position = 0;
      jump();
    }, 180);
  }
}

function move() {
  $slides.style.transform = "translateX(" + position * slideWidth * -1 + "px)";
}

function jump(callback) {
  $slides.style.transition = "none";
  window.requestAnimationFrame(function () {
    move();

    window.requestAnimationFrame(function () {
      $slides.style.transition = "transform 0.3s";

      if (callback) {
        callback();
      }
    });
  });
}
