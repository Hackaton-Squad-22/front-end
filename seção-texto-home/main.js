const quebraLinhas = document.querySelectorAll(".br")
const secaoMedia = document.querySelector(".secao-media-home")

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 744 && window.innerWidth > 430) {
    for (let linha of quebraLinhas) {
      linha.classList.toggle("table-txt")
    }
  }

/*   console.log(secaoMedia);
  console.log(window.innerWidth);
  if ( window.innerWidth <= 430 ) {
    secaoMedia.classList.add("text-center")
  } */
})