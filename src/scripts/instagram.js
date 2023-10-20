import { instagramData } from "./instagramData.js";

const instagrammListEl = document.querySelector(".instagramm__list");

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

// function instRenderMob(data) {}

if (window.innerWidth >= 768) {
  instagrammListEl.innerHTML = instRenderTab(instagramData);
}
