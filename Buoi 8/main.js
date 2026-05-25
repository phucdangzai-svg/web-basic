let n;
function isprime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
}
let t = isprime(10);
console.log(t);
let sum = 0;
function soHoanHao(n) {
  let kt = n > 0;
  for (let i = 0; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  return sum == n && kt;
}
let m = soHoanHao(6);
console.log(m);
let title1 = document.getElementById("div1");
let box = document.querySelector(".box");
let box1 = document.querySelectorAll(".box");
// ghi de len title
title1.innerText = "hello";
title1.innerHTML = "<b> hi <b>";
let button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("loi");
});

box.style.color;
