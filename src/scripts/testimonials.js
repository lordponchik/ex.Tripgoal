import { reviewsData } from "./testimonialsData";
import Swiper from "swiper";
import { Scrollbar } from "swiper/modules";
// import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/modules/scrollbar.css";

const svgQuotation = `<svg id="icon-quotation" width="30" height="30" class="review__svg" viewBox="0 0 32 32">
<path d="M0 17.687h8.375v2.443c0 1.396-1.136 2.531-2.531 2.531h-3.219v6.25h3.219c4.842 0 8.781-3.939 8.781-8.781v-17.068h-14.625v14.625z"></path>
<path d="M17.375 3.063v14.625h8.375v2.443c0 1.396-1.135 2.531-2.531 2.531h-3.219v6.25h3.219c4.842 0 8.781-3.939 8.781-8.781v-17.068h-14.625z"></path>
</svg>`;

const testimonialsWrapperEl = document.querySelector(".testimonials__wrapper");

if (innerWidth >= 1280) {
  renderBlockForDesktop();
} else {
  renderBlockForMobTab();
}

function renderBlockForDesktop() {
  testimonialsWrapperEl.innerHTML = `<ul class="participants list"></ul>
            <div class="review">
              ${svgQuotation}
              <div class="review__description">
              </div>
            </div>`;

  const participantsEl = document.querySelector(".participants");

  participantsEl.innerHTML = renderFoto(reviewsData);

  function renderFoto(reviewData) {
    return reviewData
      .map(({ src, alt }) => {
        return `<li class="participants__item">
                <img src="${src}" alt="${alt}" loading="lazy"/>
              </li>`;
      })
      .join("");
  }

  const descrEl = document.querySelector(".review__description");

  descrEl.innerHTML = ` <p class="review__text">
                 ${reviewsData[0].review}
                </p>
                <h3 class="review__title">${reviewsData[0].name}</h3>
                <p class="review__position">${reviewsData[0].activity}</p>`;

  let prev = participantsEl.firstChild;
  prev.classList.add("active");

  participantsEl.addEventListener("click", renderSelectedReview);

  function renderSelectedReview(e) {
    if (e.target.nodeName !== "IMG") return;

    prev.classList.remove("active");
    e.target.parentNode.classList.add("active");
    prev = e.target.parentNode;

    const altName = e.target.getAttribute("alt");

    const pos = reviewsData.findIndex((option) => option.alt === altName);

    descrEl.innerHTML = "";
    descrEl.innerHTML = ` <p class="review__text">
                   ${reviewsData[pos].review}
                  </p>
                  <h3 class="review__title">${reviewsData[pos].name}</h3>
                  <p class="review__position">${reviewsData[pos].activity}</p>`;
  }
}
function renderBlockForMobTab() {
  testimonialsWrapperEl.innerHTML = `<div class="swiper">
  <div class="swiper-wrapper testimonials__swiper-wrapper"></div>
  <div class="swiper-scrollbar"></div>
  </div>`;

  const swiper = new Swiper(".swiper", {
    modules: [Scrollbar],
    direction: "horizontal",
    loop: false,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  const swiperEl = testimonialsWrapperEl.querySelector(".swiper-wrapper");

  swiperEl.innerHTML = sleidsReviews(reviewsData);

  function sleidsReviews(reviewsData) {
    return reviewsData
      .map(({ name, review, activity }) => {
        return `<div class="swiper-slide">
               <div class="review__description">
               ${svgQuotation}
                <p class="review__text">
                 ${review}
                </p>
                <h3 class="review__title">${name}</h3>
                <p class="review__position">${activity}</p>
              </div>
            </div>`;
      })
      .join("");
  }
}
