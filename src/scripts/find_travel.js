import { descrImg } from "./find_travelData";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/swiper-bundle.css";
// import "swiper/modules/navigation.css";
const stepsEl = document.querySelector(".steps");

if (window.innerWidth >= 768) {
  stepsRenderTab();
} else if (window.innerWidth < 768) {
  stepsRenderMob();
}

function stepsRenderMob() {
  stepsEl.innerHTML = `<div class="swiper">
  <div class="swiper-wrapper"></div>
   <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  </div>`;

  const swiperEl = document.querySelector(".swiper-wrapper");

  swiperEl.innerHTML = stepsMobData(descrImg);

  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
function stepsRenderTab() {
  const stepsListEl = document.createElement("ul");
  stepsListEl.classList.add("steps__list");
  stepsEl.appendChild(stepsListEl);

  stepsListEl.innerHTML = stepsTabData(descrImg);
}

function stepsMobData(descr) {
  return descr
    .map(({ src, alt, title, descr }) => {
      return `<div class="swiper-slide">
              <img
                  src="${src}"
                  alt="${alt}"
                  width="100"
                  class="steps__img"
                />
                <h3 class="steps__title">${title}</h3>
                <p class="steps__description">
                  ${descr}
                </p>
            </div>`;
    })
    .join("");
}
function stepsTabData(descr) {
  return descr
    .map(({ src, alt, title, descr }) => {
      return `<li class="steps__item">
                <img
                  src="${src}"
                  alt="${alt}"
                  width="100"
                  class="steps__img"
                />
                <h3 class="steps__title">${title}</h3>
                <p class="steps__description">
                  ${descr}
                </p>
              </li>`;
    })
    .join("");
}

window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;

  stepsEl.innerHTML = "";

  stepsRenderTab();
});
window.matchMedia("(max-width: 767px)").addEventListener("change", (e) => {
  if (!e.matches) return;

  stepsEl.innerHTML = "";

  stepsRenderMob();
});
