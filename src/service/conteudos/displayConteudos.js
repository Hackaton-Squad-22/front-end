import conteudo from "./conteudo.js";
const moduloOpcional = document.querySelector(".modulo-opcional");
const moduloInicio = document.querySelector(".modulo-inicio");
const moduloConceitosBasicos = document.querySelector(".modulo-conceitos");

const displayConteudos = (dadosArray, fs, qa, ux) => {

  moduloInicio.innerHTML = "";
  moduloConceitosBasicos.innerHTML = "";
  moduloOpcional.innerHTML = "";

  for (let curso of dadosArray) {
    if (curso.modulo == "inicio") {
      moduloInicio.innerHTML += conteudo(curso, fs);
    } else if (curso.modulo == "conceitos-basicos") {
      moduloConceitosBasicos.innerHTML += conteudo(curso, fs);
    } else if (curso.modulo == "opcional") {
      moduloOpcional.innerHTML += conteudo(curso, fs);
    }
  }
};

export default displayConteudos