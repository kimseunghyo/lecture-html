Splitting();

const header = document.querySelector(".header");
const btnAll = document.querySelector(".btn--all");
const depth01 = document.querySelectorAll(".gnb > .list > li > a");
const depth02 = document.querySelectorAll(".gnb > .list > li > .depth02");

btnAll.addEventListener("click", function (e) {
  e.preventDefault();
  header.classList.toggle("on");

  setTimeout(function () {
    for (let i = 0; i < depth02.length; i++) {
      depth02[i].classList.remove("on");
    }
  }, 200);
});

for (let i = 0; i < depth01.length; i++) {
  depth01[i].addEventListener("click", function (e) {
    e.preventDefault();

    if (depth02[i]) {
      for (let j = 0; j < depth02.length; j++) {
        if (j != i) {
          depth02[j].classList.remove("on");
        }
        depth02[i].classList.toggle("on");
      }
    }
  });
}

AOS.init({
  duration: 1000,
  delay: 500,
});

const swiper1 = new Swiper(".visual__list", {
  // slide, cube, fade
  effect: "cube",
  loop: true,

  pagination: {
    el: ".visual__list .pagination",
    type: "bullets",
    clickable: true,
  },

  cubeEffect: {
    shadow: false,
  },
});

const swiper2 = new Swiper(".news-banner", {
  // slide, cube, fade
  loop: true,
  spaceBetween: 50,

  navigation: {
    nextEl: ".news-banner .btn--next",
    prevEl: ".news-banner .btn--prev",
  },
});

// visual__txt 움직이기
gsap.from(".visual__txt .char", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4",
  stagger: 0.02,
});
