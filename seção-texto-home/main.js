const quebraLinhas = document.querySelectorAll(".br")
const btnVoltaAoTopo = document.querySelector(".btn-up-top")

console.log(window.screen.width);

window.addEventListener("DOMContentLoaded", () => {
  if (window.screen.width <= 744 && window.screen.width > 430) {
    for (let linha of quebraLinhas) {
      linha.classList.toggle("table-txt")
    }
  }
})