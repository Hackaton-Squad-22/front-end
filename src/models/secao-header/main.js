const p = document.querySelector('.texto-comunidade');

window.addEventListener("resize", () => {
  if (window.innerWidth <= 744) {
    p.innerHTML = 'comunidade'
  }
})