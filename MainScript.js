//NavBar Animation
let homeitem = document.getElementById("homeitem");
let aboutitem = document.getElementById("aboutitem");
window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll < 400 || 0) {
    homeitem.classList.add("colortest");
    aboutitem.classList.remove("colortest");
  } else {
    aboutitem.classList.add("colortest");
    homeitem.classList.remove("colortest");
  }
});

// Services animation
let servicesTitle = document.getElementById("servicesTitle");
window.addEventListener("scroll", function () {
  let scrollPercentage = (window.scrollY / document.body.offsetHeight) * 800;
  servicesTitle.style.left = scrollPercentage + "px";
});

//fading animation on scroll

window.addEventListener("scroll", function () {
  let column1 = document.getElementById("Column1");
  let section = document.querySelector(".threeColumn");
  let scrollPercentage =
    1 - section.getBoundingClientRect().y / window.innerHeight;

  section.style.opacity = (scrollPercentage - 0.2) * 2;
});

//animations appear onScreen

window.addEventListener("scroll", function () {
  let cible = document.querySelector(".title2");
  let ciblePosition = cible.getBoundingClientRect().y;
  if (ciblePosition < window.innerHeight) {
    cible.classList.add("appearFromRight");
  }
});

window.addEventListener("scroll", function () {
  let cible = document.querySelector(".compteur");
  let ciblePosition = cible.getBoundingClientRect().y;
  if (ciblePosition < window.innerHeight) {
    cible.classList.add("appearFromTop");
  }
});
