function scrollHeader() {
  const header = document.getElementById("header");
  if (header) {
    window.scrollY >= 20
      ? header.classList.add("active")
      : header.classList.remove("active");
  }
}
window.addEventListener("scroll", scrollHeader);

document.querySelectorAll(".header nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    document
      .querySelectorAll(".header nav a")
      .forEach((l) => l.classList.remove("active-link"));

    this.classList.add("active-link");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuHamb = document.querySelector(".menu-hamb");
  const navMenu = document.getElementById("nav");

  if (menuHamb && navMenu) {
    menuHamb.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      menuHamb.classList.toggle("active");
    });
  }
});

document.querySelectorAll('.menu a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".menu-hamb").classList.remove("active");
    document.querySelector(".menu").classList.remove("active");
  });
});
