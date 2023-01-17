Splitting();

const header = document.querySelector(".header");
const gnb = document.querySelector(".gnb__list");

gnb.addEventListener("mouseenter", function (e) {
  header.classList.add("on");
});

gnb.addEventListener("mouseleave", function (e) {
  header.classList.remove("on");
});

const swiper = new Swiper(".main-visual__list", {
  loop: true,

  pagination: {
    el: ".main-visual__list .pagination",
    type: "bullets",
    clickable: true,
  },

  cubeEffect: {
    shadow: false,
  },
});

gsap.from(".main-visual__txt .char", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4",
  stagger: 0.02,
});
