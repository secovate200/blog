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
// 페이지 로드 시 로컬 스토리지에서 테마 확인
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("darkmode");
  themeToggle.textContent = "light_mode";
}

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("darkmode")) {
    body.classList.remove("darkmode");
    themeToggle.textContent = "dark_mode";
    localStorage.setItem("theme", "light"); // 상태 저장
  } else {
    body.classList.add("darkmode");
    themeToggle.textContent = "light_mode";
    localStorage.setItem("theme", "dark"); // 상태 저장
  }
});
