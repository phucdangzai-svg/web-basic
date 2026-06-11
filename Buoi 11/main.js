let div = document.querySelector(".content >span");
let menu = document.querySelector(".menu-item  ");

div.addEventListener("click", function () {
  menu.classList.toggle("show");
});
