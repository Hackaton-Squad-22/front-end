class VerificacaoLogin {
  static verificaEmail = (email, arr) => {
    var emailFormato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let erro = document.querySelector(".erro-email"); 
    if (email.match(emailFormato)) {
      erro.innerHTML = "";
      return;
    } else {
      erro.innerHTML = "Digite um e-mail válido";
      arr.push(...[`erro-email-formato`]);
    }
  };

  static verificaPassword = (password, arr) => {
    let erro = document.querySelector(".erro-password");
    if (password.trim() === "") {
      erro.innerHTML = "Digite a senha";
      arr.push("erro-password-vazia");
    } else {
      erro.innerHTML = "";
    }
  };
}

export default VerificacaoLogin;
