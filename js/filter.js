const toggleFiterMenu = document.getElementById("toggleFiterMenu");
const hideFiterMenu = document.getElementById("hideFiterMenu");
const mobileFilterMenu = document.getElementById("mobileFilterMenu");

if (toggleFiterMenu) {
  toggleFiterMenu.addEventListener("click", () => {
    mobileFilterMenu.classList.toggle("translate-x-[-100%]");
  });
}
if (hideFiterMenu) {
  hideFiterMenu.addEventListener("click", () => {
    mobileFilterMenu.classList.add("translate-x-[-100%]");
  });
}
