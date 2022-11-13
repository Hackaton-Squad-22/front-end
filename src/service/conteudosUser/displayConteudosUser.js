import conteudoUser from "./conteudoUser.js";

const moduloOpcional = document.querySelector(".modulo-opcional");
const moduloInicio = document.querySelector(".modulo-inicio");
const moduloConceitosBasicos = document.querySelector(".modulo-conceitos");

const displayConteudosUser = (dadosArray, fs, qa, ux) => {
  /*   moduloInicio.innerHTML = "";
  moduloConceitosBasicos.innerHTML = "";
  moduloOpcional.innerHTML = ""; */

  for (let curso of dadosArray) {
    if (curso.modulo == "inicio") {
      moduloInicio.innerHTML += conteudoUser(curso, fs);
    } else if (curso.modulo == "conceitos-basicos") {
      moduloConceitosBasicos.innerHTML += conteudoUser(curso, fs);
    } else if (curso.modulo == "opcional") {
      moduloOpcional.innerHTML += conteudoUser(curso, fs);
    }
  }
};

export default displayConteudosUser;
