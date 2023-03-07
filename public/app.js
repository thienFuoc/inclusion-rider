const imgDesktop = document.getElementById("imgDesktop");
const imgMobile = document.getElementById("imgMobile");
const purpleDesktop = document.getElementById("purpleDesktop");
const purpleMobile = document.getElementById("purpleMobile");
const slideImage = document.getElementById("slide-image");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  imgDesktop.style.left = -(value / 20) + 10 + "%";
  purpleDesktop.style.right = -(value / 15) + 80 + "%";
  imgMobile.style.left = -(value / 20) + 10 + "%";
  purpleMobile.style.right = -(value / 15) + 75 + "%";
});

slideImage.addEventListener("click", function () {
  window.location.href = "../public/about.html";
});