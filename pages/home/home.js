import {
  animateOnView,
  getCircleCoordinates,
} from "/shared/utilities/helperFunctions.js";
// import Swiper from "/assets/libs/swiper/swiper.min.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// Start Hero Animation
const heroElements = Array.from(document.getElementById("heroTag").children);

if (heroElements.length > 0) {
  heroElements.map((item, index) => {
    animateOnView(
      item,
      { opacity: [0, 1] },
      { duration: 1.25, ease: "easeOut", delay: (index + 1) * 0.25 },
      true
    );
  });
}
const heroVector = document.getElementById("heroVector");
if (heroVector) {
  animateOnView(
    heroVector,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.75, ease: "easeInOut", delay: 0.5 },
    true
  );
}
const heroQoute = document.getElementById("heroQoute");
if (heroQoute) {
  animateOnView(
    heroQoute,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.5, ease: "easeInOut", delay: 0.7 },
    true
  );
}

const heroPattern = document.getElementById("heroPattern");
if (heroPattern) {
  animateOnView(
    heroPattern,
    { opacity: [0, 1] },
    { duration: 0.5, ease: "easeInOut", delay: 1 },
    true
  );
}

// end Hero Animation

// Start Sub Hero Animation

const subHeroElements = Array.from(
  document.getElementById("subHeroVector").children
);
if (subHeroElements.length > 0) {
  subHeroElements.map((item, index) => {
    animateOnView(
      item,
      { opacity: [0, 1] },
      { duration: 1.25, ease: "easeOut", delay: (index + 1) * 0.25 + 0.75 },
      true,
      "0px 0px -25% 0px"
    );
  });
}

const subHeroText = document.getElementById("subHeroText");

if (subHeroText) {
  animateOnView(
    subHeroText,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.8, ease: "easeOut", delay: 0.75 },
    true,
    "0px 0px -100px 0px"
  );
}

const vectorBL = document.getElementById("vectorBL");

if (vectorBL) {
  animateOnView(
    vectorBL,
    { opacity: [0, 1], transform: ["translateX(-150px)", "translateX(0px)"] },
    { duration: 1.2, ease: "easeOut", delay: 0.1 },
    true,
    "0px 0px -100px 0px"
  );
}

const vectorTR = document.getElementById("vectorTR");

if (vectorTR) {
  animateOnView(
    vectorTR,
    { opacity: [0, 1], transform: ["translateX(-150px)", "translateX(0px)"] },
    { duration: 1.2, ease: "easeOut", delay: 0.1 },
    true,
    "0px 0px -100px 0px"
  );
}

// End Sub Hero Animation

// Start Modawana Animation

const modawanaSubHeroElements = Array.from(
  document.getElementById("modawanaSubHeroVector").children
);
if (modawanaSubHeroElements.length > 0) {
  modawanaSubHeroElements.map((item, index) => {
    animateOnView(
      item,
      { opacity: [0, 1] },
      { duration: 1.25, ease: "easeOut", delay: (index + 1) * 0.25 + 0.25 },
      true,
      "0px 0px -25% 0px"
    );
  });
}

const modawanaSubHeroText = document.getElementById("modawanaSubHeroText");

if (modawanaSubHeroText) {
  animateOnView(
    modawanaSubHeroText,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.8, ease: "easeOut", delay: 0.25 },
    true,
    "0px 0px -100px 0px"
  );
}

// Start Main Categories Animation
const cardMainCategories = Array.from(
  document.getElementById("Categories").children
);

if (cardMainCategories.length > 0) {
  cardMainCategories.map((card, index) => {
    console.log(cardMainCategories.length);
    const direction = index % 2 === 0 ? 1 : -1;
    animateOnView(
      card,
      {
        opacity: [0, 1],
        transform: [`translateX(${100 * direction}px)`, "translateX(0)"],
      },
      {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5,
      },
      true,
      "0px 0px -50px 0px"
    );
  });
}

// End Main Categories Animation

// start News Letter Section
const newsLetter = document.getElementById("newsLetter");

if (newsLetter) {
  animateOnView(
    newsLetter,
    { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0px)"] },
    { duration: 0.75, ease: "easeInOut", delay: 0.25 },
    true,
    "0px 0px -50px 0px"
  );
}

// End News Letter Section

// Start Main Categories Animation
const platFormNumbers = Array.from(
  document.getElementById("platformNumbers").children
);

if (platFormNumbers.length > 0) {
  platFormNumbers.map((card, index) => {
    animateOnView(
      card,
      {
        opacity: [0, 1],
        transform: [`translateY(100px)`, "translateX(0)"],
      },
      {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5 + index * 0.1,
      },
      true,
      "0px 0px -50px 0px"
    );
  });
}

// End Main Categories Animation
