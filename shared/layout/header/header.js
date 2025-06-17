import { scroll } from "/assets/libs/motion/motion.min.js";

const navTogglers = Array.from(document.querySelectorAll(".nav-toggler"));

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("open");
}

if (navTogglers.length > 0) {
  navTogglers.map((navToggler) =>
    navToggler.addEventListener("click", toggleMenu)
  );
}

// handle view header and nav on scroll
// This function will log the vertical scroll position
const header = document.getElementById("header");
const navMobile = document.getElementById("navMobile");
let lastScrollTop = 0;
let lastDirection = "down";
let direction = "down"; // Initialize direction
scroll((progress, info) => {
  const currentScrollTop = info.y.current;
  if (currentScrollTop > lastScrollTop) {
    direction = "down";
  } else if (currentScrollTop < lastScrollTop) {
    direction = "up";
  }
  lastScrollTop = currentScrollTop;

  if (direction === lastDirection) {
    return; // No change in direction, do nothing
  }
  lastDirection = direction; // Update lastDirection

  if (direction === "down") {
    // header.classList.add("translate-y-[-100%]");
    navMobile.classList.add("translate-y-[100%]");
  } else if (direction === "up") {
    // header.classList.remove("translate-y-[-100%]");
    navMobile.classList.remove("translate-y-[100%]");
  }
});
