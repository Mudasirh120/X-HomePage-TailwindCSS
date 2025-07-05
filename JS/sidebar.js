const App = document.querySelector("body");
// Sidebar
const extras = document.querySelectorAll(".extra");
const extra1 = document.querySelector(".extra-first");
const extra2 = document.querySelector(".extra-second");
const extra3 = document.querySelector(".extra-third");
const extra4 = document.querySelector(".extra-fourth");
const aside = document.querySelector(".third");
const sideBar = document.querySelector(".first");
const sideBarMenu = document.querySelectorAll(".sidebar-text");
const sideBarBtnIcon = document.querySelector(".sidebar-btn-icon");
// New Post
const createPost = document.querySelector(".new-post");
// Mobile Menu
const mobileMenu = document.querySelector(".mobile-only");
const hamMenuOpener = document.querySelector(".hamburger-open");
const NotForMobile = document.querySelectorAll(".not-for-mobile");
function reloadBar() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  extras.forEach((el) => el.classList.add("not-show"));
  if (height > 670) {
    extra1.classList.remove("not-show");
  }
  if (height > 720) {
    extra2.classList.remove("not-show");
  }
  if (height > 770) {
    extra3.classList.remove("not-show");
  }
  if (height > 820) {
    extra4.classList.remove("not-show");
  }
  if (width <= 1280) {
    sideBar.style.width = "20%";
    sideBarMenu.forEach((el) => el.classList.add("not-show"));
    sideBarBtnIcon.classList.remove("!hidden");
  } else {
    sideBarMenu.forEach((el) => el.classList.remove("not-show"));
    sideBarBtnIcon.classList.add("!hidden");
  }
  if (width <= 1000) {
    aside.classList.add("not-show");
  } else {
    aside.classList.remove("not-show");
  }
  if (width <= 500) {
    createPost.classList.add("not-show");
    NotForMobile.forEach((el) => el.classList.add("not-show"));
    mobileMenu.classList.remove("not-show");
    sideBar.classList.add("not-show");
    hamMenuOpener.addEventListener("click", (e) => {
      console.log("Tried");
      sideBar.classList.remove("not-show");
      sideBar.style.width = "55%";
      sideBar.style.position = "absolute";
      sideBar.style.zIndex = "10";
      sideBarMenu.forEach((el) => el.classList.remove("not-show"));
      App.style.backgroundColor = "oklch(37.2% 0.044 257.287)";
      e.stopPropagation();
      document.querySelector(".second").addEventListener("click", () => {
        App.style.backgroundColor = "#000";
        sideBar.classList.add("not-show");
      });
    });
  } else {
    createPost.classList.remove("not-show");
    NotForMobile.forEach((el) => el.classList.remove("not-show"));
    mobileMenu.classList.add("not-show");
    App.style.backgroundColor = "#000";
  }
}
window.addEventListener("load", reloadBar);
window.addEventListener("resize", reloadBar);
// Tweet Box
const tweet = document.querySelector(".quick-tweet");
const tweetBox = document.querySelector(".tweet-box");
const tweetBtn = document.querySelector(".tweet-button");
const visibility = document.querySelector(".visibility");
tweet.addEventListener("focus", () => {
  tweet.style.height = "auto";
  tweet.style.height = tweet.scrollHeight + "px";
  tweetBox.style.borderBottom = "2px solid #232242";
  tweetBtn.style.backgroundColor = "#fff";
  visibility.classList.remove("not-show");
});
tweet.addEventListener("blur", () => {
  visibility.classList.add("not-show");
});
// Search Box
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("click", () => {
  searchBox.style.border = "2px solid oklch(54.6% 0.245 262.881) ";
});
searchInput.addEventListener("blur", () => {
  searchBox.style.border = "2px solid oklch(27.9% 0.041 260.031) ";
});
