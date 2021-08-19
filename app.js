let icon = document.getElementById("icon");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".profile");
let info = document.querySelector(".info");
let clicked = 0;
hamburger.addEventListener("click", () => {
  clicked++;
  console.log(clicked);
  if (clicked % 2 === 0) {
    icon.src = "./assets/icon-hamburger.svg";
    nav.style.display = "none";
  } else {
    icon.src = "./assets/icon-close-modal.svg";
    nav.style.display = "block";
  }
});
window.addEventListener("scroll", () => {
  let scrollHeight = window.pageYOffset;
  clicked = 0;
  if (scrollHeight > 500) {
    if (clicked % 2 === 0) {
      icon.src = "./assets/icon-hamburger.svg";
      nav.style.display = "none";
    } else {
      icon.src = "./assets/icon-close-modal.svg";
      nav.style.display = "block";
    }
  }
});
