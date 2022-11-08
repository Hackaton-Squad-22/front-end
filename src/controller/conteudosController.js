import pesquisaConteudos from "../service/conteudos/pesquisaConteudos.js";
import conteudo from "../service/conteudos/conteudo.js";

const conteudosContainer = document.querySelector(".conteudos-container");

window.addEventListener("DOMContentLoaded", async () => {
  const dados = await pesquisaConteudos();

  for (let curso of dados) {
    conteudosContainer.innerHTML += conteudo(curso);
  }
});
