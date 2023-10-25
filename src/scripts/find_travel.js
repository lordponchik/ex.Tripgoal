import img from "../image/travel-perfection/*.svg";

const keyImg = Object.keys(img);

let descrImg = [
  {
    title: "Share your travel preference",
    descr: " It all happends online,We recommend everything to your vision",
  },
  {
    title: "Tell us what you want to do",
    descr: "Fill out a 2-minute questionnaire about how you like to travel",
  },

  {
    title: `We’ll give you recommendations`,
    descr:
      "Once you’re happy with your final plan, We handle everything for you",
  },
];

descrImg = [...descrImg].map((el, i) => {
  return { ...el, src: img[keyImg[i]], alt: keyImg[i] };
});

const stepsEl = document.querySelector(".steps");

const stepsListEl = document.createElement("ul");
stepsListEl.classList.add("steps__list");
stepsEl.appendChild(stepsListEl);

function stepsRender(descr) {
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

stepsListEl.innerHTML = stepsRender(descrImg);
