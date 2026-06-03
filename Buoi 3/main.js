let button = document.getElementById("btnbutton");
let input = document.getElementById("btninput");
let skill = document.querySelector(".skill .tags");

button.addEventListener("click", function () {
  skill.innerHTML += `<span> ${input.value} </span>`;
});
