import conteudoUser from "./conteudoUser.js";

const moduloOpcional = document.querySelector(".modulo-opcional");
const moduloInicio = document.querySelector(".modulo-inicio");
const moduloConceitosBasicos = document.querySelector(".modulo-conceitos");

const displayConteudosUser = (dadosArray, trilha) => {
    moduloInicio.innerHTML = "";
  moduloConceitosBasicos.innerHTML = "";
  moduloOpcional.innerHTML = "";

  for (let curso of dadosArray) {
    if (curso.modulo == "inicio") {
      moduloInicio.innerHTML += conteudoUser(curso, trilha);
    } else if (curso.modulo == "conceitos básicos") {
      moduloConceitosBasicos.innerHTML += conteudoUser(curso, trilha);
    } else if (curso.modulo == "opcional") {
      moduloOpcional.innerHTML += conteudoUser(curso, trilha);
    }
  }
};

export default displayConteudosUser;
