// colors
var mainColor = "#059cb1";
var whiteColor = "#fff";
var lightWhiteColor = "#eee";
var darkTransColor = "#000000d9";
var lightTransColor = "#ffffffcc";

// fixed nav-bar
let header = document.getElementById("navbar_top");
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
      // header.classList.add("navScroll"); //change nav styling
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
      header.classList.remove("navScroll"); //back to first style
    }
  });
});

// change active class
const li = document.querySelectorAll("li.link");
const sec = document.querySelectorAll("section");
function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// nav for small screen
// let navIcon = document.getElementById("navIcon");
// let nav = document.getElementById("nav");
// let ulLinks = document.getElementById("links");
// let logo = document.getElementById("logoText");
// let navIconShape = document.querySelectorAll("#shape");
// navIcon.addEventListener("click", () => {
//   if (navIcon.classList.contains("active")) {
//     nav.style.right = "-100%";
//     nav.style.zIndex = "-1";
//     if (window.pageYOffset === 0)
//       header.style.backgroundColor = lightWhiteColor;
//     // else header.style.backgroundColor = darkTransColor;
//     else header.style.backgroundColor = lightTransColor;
//     // logo.style.color = mainColor;
//     navIcon.classList.remove("active");
//     // navIconShape[0].style.backgroundColor = mainColor;
//     // navIconShape[1].style.backgroundColor = mainColor;
//     // navIconShape[2].style.backgroundColor = mainColor;
//   } else {
//     navIcon.classList.add("active");
//     nav.style.right = "0";
//     nav.style.zIndex = "100";
//     // header.style.backgroundColor = mainColor;
//     // logo.style.color = whiteColor;
//     // navIconShape[0].style.backgroundColor = whiteColor;
//     // navIconShape[1].style.backgroundColor = whiteColor;
//     // navIconShape[2].style.backgroundColor = whiteColor;
//   }
// });

// back to top button
let goUp = document.getElementById("up");
window.onscroll = function () {
  //show button onscroll at 700
  "use strict";
  if (window.pageYOffset >= 700) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
};
goUp.onclick = function () {
  //go up onclick
  "use strict";
  window.scrollTo(0, 0);
};

// // header in top main color
// window.addEventListener("scroll", () => {
//   if (window.pageYOffset === 0) {
//     if (navIcon.classList.contains("active")) {
//       header.style.backgroundColor = mainColor;
//     } else {
//       header.style.backgroundColor = lightWhiteColor;
//     }
//   } else {
//     if (navIcon.classList.contains("active")) {
//       header.style.backgroundColor = mainColor;
//     } else {
//       // header.style.backgroundColor = darkTransColor;
//       header.style.backgroundColor = lightTransColor;
//     }
//   }
// });
