import procuraDados from "../service/login/procuraDados.js";
import VerificacaoLogin from "../service/login/verificaLogin.js";

const form = document.querySelector("form");
const email = document.querySelector(".mail");
const password = document.querySelector(".password");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let erros = [];

  VerificacaoLogin.verificaEmail(email.value, erros);
  VerificacaoLogin.verificaPassword(password.value, erros);

  if (erros.length == 0) {
    const role = await procuraDados(email.value, password.value, erros);
    if (erros.length == 0) {
      if (role == "user") {
        location.replace("../user/index.html");
      } else if (role == "admin") {
        location.replace("../admin/index.html");
      } else {
        console.error("Parece que houve um problema");
      }
    }
  }
});
