const imgDesktop = document.getElementById("imgDesktop");
const imgMobile = document.getElementById("imgMobile");
const purpleDesktop = document.getElementById("purpleDesktop");
const purpleMobile = document.getElementById("purpleMobile");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  imgDesktop.style.left = -(value / 20 ) + 10 + "%";
  purpleDesktop.style.right = -(value / 15) + 80 + "%";
  imgMobile.style.left = -(value / 20) + 10 + "%";
  purpleMobile.style.right = -(value / 15) + 75 + "%";
});