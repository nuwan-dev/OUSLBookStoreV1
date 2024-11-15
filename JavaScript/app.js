const scrollNav = document.querySelector(".bkstore-top-nav-container-dekstop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 3) {
    scrollNav.classList.add("scroll-header");
  } else {
    scrollNav.classList.remove("scroll-header");
  }
});
