var slider = document.getElementById("range--slider--line");
var bullet = document.getElementById("range--slider--bullet");

slider.addEventListener("input", showingSlider, false);

function showingSlider() {

  bullet.innerHTML = slider.value;

  var bulletPosition = (slider.value /slider.max);

  bullet.style.left = (bulletPosition * 578) + "px";

}

