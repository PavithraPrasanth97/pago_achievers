window.onload = function () {
  document.querySelector(".carousel-container1").classList.add("slide");
};

const navIcon = document.getElementById("nav-icon");
const allLinks = document.getElementById("all-links");
navIcon.addEventListener("click", () => {
  allLinks.classList.toggle("active");
});
