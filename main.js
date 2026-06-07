let divs = document.querySelectorAll("div");

divs.forEach((div) => {
  div.addEventListener("click", function () {
    div.classList.toggle("red");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i] != div) {
        divs[i].classList.remove("red");
      }
    }
  });
});
