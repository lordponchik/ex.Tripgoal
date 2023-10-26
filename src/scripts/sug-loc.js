const btnEl = {
  previousEl: document.querySelector(".sug-loc__btn--previous"),
  nextEl: document.querySelector(".sug-loc__btn--next"),
};

const locations = document.querySelectorAll(".location__item");
const arrLocations = [...locations];

let valueActive;
let valuePrevious;
let valueNext;
let valueSubsequent;

btnEl.nextEl.addEventListener("click", (e) => {
  renderValueForNext();

  if (valueActive === locations.length - 1) {
    e.currentTarget.setAttribute("disabled", "disabled");
    return;
  }

  arrLocations[valueActive].classList.remove("location__item--active");
  arrLocations[valueActive].classList.add("location__item--previous");

  arrLocations[valuePrevious].classList.remove("location__item--previous");

  arrLocations[valueNext].classList.remove("location__item--next");
  arrLocations[valueNext].classList.add("location__item--active");

  arrLocations[valueSubsequent].classList.add("location__item--next");
});

function renderValueForNext() {
  valueActive = arrLocations.findIndex((el) =>
    el.classList.contains("location__item--active")
  );

  valuePrevious = valueActive === 0 ? arrLocations.length - 1 : valueActive - 1;
  valueNext = valueActive === arrLocations.length - 1 ? 0 : valueActive + 1;
  valueSubsequent = valueNext === arrLocations.length - 1 ? 0 : valueNext + 1;
}
