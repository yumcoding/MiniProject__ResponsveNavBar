const toggleBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector(".menu");
const sns = document.querySelector(".sns");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  sns.classList.toggle("active");
});
