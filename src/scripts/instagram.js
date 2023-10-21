import { instagramData } from "./instagramData.js";
// import Swiper JS
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/modules/navigation.css";

const instagrammListEl = document.querySelector(".instagram__wrapper");

if (window.innerWidth >= 768) {
  const instagramUlEl = document.createElement("ul");
  instagramUlEl.classList.add("instagramm__list");
  instagramUlEl.classList.add("list");

  instagrammListEl.append(instagramUlEl);
  instagramUlEl.innerHTML = instRenderTab(instagramData);
} else if (window.innerWidth < 768) {
  instagrammListEl.innerHTML = `<div class="swiper">
  <div class="swiper-wrapper"></div>
   <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  </div>`;

  const swiperEl = document.querySelector(".swiper-wrapper");

  swiperEl.innerHTML = instRenderMob(instagramData);

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

function instRenderTab(data) {
  return data
    .map(({ name, alt }) => {
      return `<li class="instagramm__item">
              <img
                src="${name}"
                alt="${alt}"
                class="instagramm__img"
                height="300"
                width="400"
              />
            </li>`;
    })
    .join("");
}

function instRenderMob(data) {
  return data
    .map(({ name, alt }) => {
      return `<div class="swiper-slide">
              <img
                src="${name}"
                alt="${alt}"
                class="swiper__img"
                height="300"
                width="400"
              />
            </div>`;
    })
    .join("");
}
{
  /* <div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div> */
}
