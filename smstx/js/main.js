Splitting();

const header = document.querySelector(".header");
const gnb = document.querySelector(".gnb__list");
const btnAuto = document.querySelector(".btn--auto");

gnb.addEventListener("mouseenter", function (e) {
  header.classList.add("on");
});

gnb.addEventListener("mouseleave", function (e) {
  header.classList.remove("on");
});

const swiper = new Swiper(".main-visual__list", {
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".main-visual__list .pagination-box",
    type: "bullets",
    clickable: true,
  },

  cubeEffect: {
    shadow: false,
  },
});

btnAuto.addEventListener("click", function () {
  if (swiper.autoplay.paused) {
    swiper.autoplay.run();
    btnAuto.classList.remove("off");
  } else {
    swiper.autoplay.pause();
    btnAuto.classList.add("off");
  }
});

gsap.from(".main-visual__txt .char", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4",
  stagger: 0.02,
});
