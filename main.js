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
