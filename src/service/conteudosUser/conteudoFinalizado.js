const conteudoFinalizado = (cursosIniciados, cursoId) => {
  let iniciado = "not-finished-icon.svg";
  for (let curso of cursosIniciados) {
    if (curso === cursoId) {
      iniciado = "finished-icon.svg";
      break;
    } else {
      iniciado = "not-finished-icon.svg";
    }
  }
  return iniciado;
};

export default conteudoFinalizado;
