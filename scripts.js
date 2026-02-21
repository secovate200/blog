const nav = document.querySelector(".nav");
const searchIcon = document.getElementById("search-icon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    searchIcon.textContent = "close";
  } else {
    searchIcon.textContent = "search";
  }
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.textContent = "search";
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
themeToggle.addEventListener("click", () => {
  if (themeToggle.textContent === "dark_mode") {
    themeToggle.textContent = "light_mode";
    body.classList.remove("darkmode");
  } else {
    themeToggle.textContent = "dark_mode";

    body.classList.add("darkmode");
  }
});
