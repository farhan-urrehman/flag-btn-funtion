let flag = 0;
let onoffBtn = document.getElementById("on-off-Btn");

onoffBtn.addEventListener("click", function () {
  if (flag == 0) {
    document.getElementById("bulb-img").src =
      "https://i.postimg.cc/6QyTynzr/bulb-on.png";
    onoffBtn.textContent = "Off";
    flag = 1;
  } else {
    document.getElementById("bulb-img").src =
      "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    onoffBtn.textContent = "On";
    flag = 0;
  }
});
