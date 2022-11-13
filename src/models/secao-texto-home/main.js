const quebraLinhas = document.querySelectorAll(".br");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 744 && window.innerWidth > 430) {
    for (let linha of quebraLinhas) {
      linha.classList.remove("desabilitado");
    }
  }

  if (window.innerWidth > 744) {
    for (let linha of quebraLinhas) {
      linha.classList.add("desabilitado");
    }
  }
});
