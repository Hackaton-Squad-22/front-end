import conteudoAdmin from "./conteudoAdmin.js";

const moduloInicio = document.querySelector(".modulo-inicio");
const moduloFundamentosUx = document.querySelector(".modulo-fundamentos-ux");
const moduloFundamentosUi = document.querySelector(".modulo-fundamentos-ui");
const moduloOpcional = document.querySelector(".modulo-opcional");

const displayConteudosAdmin = (dadosArray, trilha) => {
  moduloInicio.innerHTML = "";
  moduloFundamentosUx.innerHTML = "";
  moduloFundamentosUi.innerHTML = "";
  moduloOpcional.innerHTML = "";

  for (let curso of dadosArray) {
    if (curso.modulo == "inicio") {
      moduloInicio.innerHTML += conteudoAdmin(curso, trilha);
    } else if (curso.modulo == "Fundamentos de UX") {
      moduloFundamentosUx.innerHTML += conteudoAdmin(curso, trilha);
    } else if (curso.modulo == "Fundamentos de UI") {
      moduloFundamentosUi.innerHTML += conteudoAdmin(curso, trilha);
    } else if (curso.modulo == "Opcional") {
      moduloOpcional.innerHTML += conteudoAdmin(curso, trilha);
    }
  }
};

export default displayConteudosAdmin;
