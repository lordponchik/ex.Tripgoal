import img from "../image/travel-perfection/*.svg";

const keyImg = Object.keys(img);

export let descrImg = [
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
