const documentEl = {
  mobMenuBtn: document.querySelector(".mob-menu"),
  mobMenu: document.querySelector(".mob-nav"),
  mobMenuOpenSVG: document.querySelector(".mob-menu__open"),
  mobMenuCloseSVG: document.querySelector(".mob-menu__close"),
};

documentEl.mobMenuBtn.addEventListener("click", () => {
  const mobExpandedAtr =
    documentEl.mobMenuBtn.getAttribute("aria-expanded") === "true" || false;

  documentEl.mobMenuBtn.setAttribute("aria-expanded", !mobExpandedAtr);

  documentEl.mobMenu.classList.toggle("open");
  documentEl.mobMenuOpenSVG.classList.toggle("visible");
  documentEl.mobMenuCloseSVG.classList.toggle("visible");

  documentEl.mobMenu.classList.contains("open")
    ? (document.body.style.overflow = "hidden")
    : document.body.style.removeProperty("overflow");
});

window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;

  if (documentEl.mobMenu.classList.contains("open")) {
    documentEl.mobMenuOpenSVG.classList.toggle("visible");
    documentEl.mobMenuCloseSVG.classList.toggle("visible");
  }

  documentEl.mobMenu.classList.remove("open");
  document.body.style.removeProperty("overflow");
});
