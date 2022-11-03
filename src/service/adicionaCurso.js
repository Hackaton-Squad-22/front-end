const adicionaCurso = (cursosIniciados) => {
  const conteudo = document.querySelector(".conteudo");
  let conteudoId = ""

  if (cursosIniciados.length === 0) {
    cursosIniciados.push({
      id: conteudo.id, //validaro conteudo.id
    });
    conteudoId = conteudo.id
  } else {
    for (let curso of cursosIniciados) {
      if (curso.conteudo != conteudo.nome) {
        cursosIniciados.push({
          id: conteudo.id, //validaro conteudo.id
        });
        conteudoId = conteudo.id
      }
    }
  }
  return conteudoId
};

export default adicionaCurso;
