import conteudoAdmin from "./conteudoAdmin.js";

const moduloOpcional = document.querySelector(".modulo-opcional");
const moduloInicio = document.querySelector(".modulo-inicio");
const moduloConceitosBasicos = document.querySelector(".modulo-conceitos");

const displayConteudosAdmin = (dadosArray, fs, qa, ux, user = "") => {
  /*   moduloInicio.innerHTML = "";
  moduloConceitosBasicos.innerHTML = "";
  moduloOpcional.innerHTML = ""; */

  for (let curso of dadosArray) {
    if (curso.modulo == "inicio") {
      moduloInicio.innerHTML += conteudoAdmin(curso, fs);
    } else if (curso.modulo == "conceitos-basicos") {
      moduloConceitosBasicos.innerHTML += conteudoAdmin(curso, fs);
    } else if (curso.modulo == "opcional") {
      moduloOpcional.innerHTML += conteudoAdmin(curso, fs);
    }
  }
};

export default displayConteudosAdmin;
