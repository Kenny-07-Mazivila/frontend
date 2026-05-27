function toggleMenu() {
  const menu = document.getElementById("menu");
  const burger = document.querySelector(".hamburger");

  menu.classList.toggle("show");
  burger.classList.toggle("active");
}

/* close when clicking outside */
window.addEventListener("click", function(e) {
  const menu = document.getElementById("menu");
  const burger = document.querySelector(".hamburger");

  if (!burger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
    burger.classList.remove("active");
  }
});