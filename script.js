const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");
const themeToggle = document.querySelector("#theme-toggle");
const body = document.querySelector("body");
searchIcon.addEventListener("click", () => {
  // 1. 클래스를 토글하고 상태를 변수에 저장 (가독성 향상)
  const isOpen = nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  // 2. 삼항 연산자로 아이콘 텍스트 변경 (오타 수정 및 간결화)
  searchIcon.innerText = isOpen ? "close" : "search";
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.innerText = "search";
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
// [1] 불러오기: 페이지가 로드되자마자 실행
const savedTheme = localStorage.getItem("theme");

// 만약 저장된 값이 'dark'라면 바로 적용
if (savedTheme === "dark") {
  body.classList.add("darkmode");
  themeToggle.innerText = "light_mode";
} else {
  // 기본 상태 설정
  themeToggle.innerText = "dark_mode";
}

// [2] 저장하기: 클릭할 때마다 상태 업데이트
themeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("darkmode");

  // 아이콘 텍스트 변경
  themeToggle.innerText = isDark ? "light_mode" : "dark_mode";

  // 로컬 스토리지에 문자열로 저장
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
