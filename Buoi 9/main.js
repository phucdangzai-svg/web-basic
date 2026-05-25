const colorInput = document.getElementById("colorInput");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");

const submitBtn = document.getElementById("submitBtn");

const screen2 = document.getElementById("screen2");

const showColor = document.getElementById("showColor");
const showWidth = document.getElementById("showWidth");
const showHeight = document.getElementById("showHeight");

const rectangle = document.getElementById("rectangle");
const colorText = document.getElementById("colorText");
const topSize = document.getElementById("topSize");
const rightSize = document.getElementById("rightSize");

submitBtn.addEventListener("click", function () {
  let color = colorInput.value.trim();
  const width = widthInput.value.trim();
  const height = heightInput.value.trim();

  if (color === "" || width === "" || height === "") {
    alert("Bạn nhập thiếu thông tin!");
    return;
  }

  if (Number(width) <= 0 || Number(height) <= 0) {
    alert("Chiều ngang và chiều dọc phải lớn hơn 0!");
    return;
  }
  screen2.classList.remove("hidden");
  showColor.value = color;
  showWidth.value = width;
  showHeight.value = height;
  rectangle.style.width = width + "px";
  rectangle.style.height = height + "px";
  rectangle.style.backgroundColor = color;
  topSize.textContent = width + "px";
  rightSize.textContent = height + "px";
  colorText.textContent = color;
});

rectangle.addEventListener("click", function () {
  colorInput.value = "";
  widthInput.value = "";
  heightInput.value = "";

  showColor.value = "";
  showWidth.value = "";
  showHeight.value = "";

  rectangle.style.width = "";
  rectangle.style.height = "";
  rectangle.style.backgroundColor = "";

  topSize.textContent = "";
  rightSize.textContent = "";
  colorText.textContent = "";

  screen2.classList.add("hidden");
});
