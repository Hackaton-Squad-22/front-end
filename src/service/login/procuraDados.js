async function procuraDados(email, password, arr) {
  const response = await fetch("https://squad22-hackathon.herokuapp.com/users");
  const dados = await response.json();
  let erroEmail = document.querySelector(".erro-email");
  let erroPassword = document.querySelector(".erro-password");
  let role = ""

  for (let dado of dados) {
    if (dado.email === email && dado.password === password) {
      role = dado.role 
      erroEmail.innerHTML = "";
      erroPassword.innerHTML = "";
      return role;
    } else if ( dado.email != email ) {
      erroEmail.innerHTML = "E-mail não encontrado";
    } else if ( dado.password != password ) {
      erroPassword.innerHTML = "Senha incorreta";
    } else {
      console.error("Ocorreu um erro");
    }
  }

  if (erroEmail.innerHTML.length > 0 || erroPassword.innerHTML.length > 0) {
    arr.push(...["erroDadosLogin"]);
  }
}

export default procuraDados;
