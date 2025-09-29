const menuIcon = document.getElementById("list-icon");
const mainNav = document.getElementById("menu-icon");

menuIcon.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});
