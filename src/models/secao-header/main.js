const p = document.querySelector('.texto-comunidade');

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1000) {
    p.innerHTML = 'comunidade'
  }
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) {
    p.innerHTML = 'junte-se a comunidade'
  }
})