const slider = document.getElementById("satisfaction");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("input", function () {
  sliderValue.textContent = this.value;
  sliderValue.style.right = `${100 - this.value}%`; // Adjust the position of the value dynamically
});
