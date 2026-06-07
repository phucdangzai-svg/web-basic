let button = document.getElementById("btnbutton");
let input = document.getElementById("btninput");
let skill = document.querySelector(".skill .tags");
const div = document.querySelector("div:nth-child(2)");
const div = document.querySelector("p:nth-of-type(1)");
button.addEventListener("click", function () {
  skill.innerHTML += `<span> ${input.value} </span>`;
});
const divs=document.querySelectorAll("div");
divs.forEach(
  function(div)
)
div.addEventListener("click" )