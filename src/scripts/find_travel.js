import { descrImg } from "./find_travelData";

const stepsEl = document.querySelector(".steps");

if (window.innerWidth >= 768) {
  stepsRenderTab();
}

function stepsRenderTab() {
  const stepsListEl = document.createElement("ul");
  stepsListEl.classList.add("steps__list");
  stepsEl.appendChild(stepsListEl);

  stepsListEl.innerHTML = stepsData(descrImg);
}

function stepsData(descr) {
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
