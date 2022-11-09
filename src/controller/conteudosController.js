import pesquisaConteudos from "../service/conteudos/pesquisaConteudos.js";
import conteudo from "../service/conteudos/conteudo.js";

const moduloInicio = document.querySelector(".modulo-inicio");
const moduloConceitosBasicos = document.querySelector(".modulo-conceitos");
const moduloOpcional = document.querySelector(".modulo-opcional");

window.addEventListener("DOMContentLoaded", async () => {
  const dados = await pesquisaConteudos();

  for (let curso of dados) {
    if (curso.modulo == "inicio") {
      moduloInicio.innerHTML += conteudo(curso);
    } else if (curso.modulo == "conceitos-basicos") {
      moduloConceitosBasicos.innerHTML += conteudo(curso);
    } else if (curso.modulo == "opcional") {
      moduloOpcional.innerHTML += conteudo(curso);
    }
  }
});
