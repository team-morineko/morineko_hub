const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.style.display = (nav.style.display === "block") ? "none" : "block";
});
