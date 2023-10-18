const mobMenuBtn = document.querySelector(".mob-menu");
const mobMenu = document.querySelector(".mob-nav");

const mobMenuOpenSVG = document.querySelector(".mob-menu__open");
const mobMenuCloseSVG = document.querySelector(".mob-menu__close");

mobMenuBtn.addEventListener("click", () => {
  mobMenu.classList.toggle("open");
  mobMenuOpenSVG.classList.toggle("toggle");
  mobMenuCloseSVG.classList.toggle("toggle");
});
