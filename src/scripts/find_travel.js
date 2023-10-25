import { descrImg } from "./find_travelData";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/swiper-bundle.css";
// import "swiper/modules/navigation.css";
const stepsEl = document.querySelector(".steps");

if (window.innerWidth >= 768) {
  stepsRenderTab();
}

function stepsRenderMob() {
  stepsEl.innerHTML = `<div class="swiper">
  <div class="swiper-wrapper"></div>
   <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  </div>`;
}
function stepsRenderTab() {
  const stepsListEl = document.createElement("ul");
  stepsListEl.classList.add("steps__list");
  stepsEl.appendChild(stepsListEl);

  stepsListEl.innerHTML = stepsTabData(descrImg);
}

function stepsTabData(descr) {
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
function stepsMobData(descr) {
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
