const editarConteudosFs = async (baseUrl = "") => {

  const cursoId = document.querySelector(".conteudo").dataset.id
  const tituloAtual = document.querySelector(".titulo").innerHTML
  const duracaoAtual = document.querySelector(".duracao").innerHTML
  const tipoAtual = document.querySelector(".tipo").dataset.tipo
  const autorAtual = document.querySelector(".autor").innerHTML
  const urlAtual = document.querySelector(".conteudo-container").href
  const moduloAtual = document.querySelector(".conteudo").dataset.modulo

  const tituloFinal = document.querySelector(".add-conteudo-titulo");
  const duracaoFinal = document.querySelector(".add-conteudo-duracao");
  const tipoFinal = document.querySelector(".add-conteudo-tipo");
  const autorFinal = document.querySelector(".add-conteudo-autor");
  const urlFinal = document.querySelector(".add-conteudo-url");
  const moduloFinal = document.querySelector(".add-conteudo-modulo");

  if (tituloFinal == "" || duracaoFinal == "" || tipoFinal == "" || autorFinal == "" || urlFinal == "" || moduloFinal == "") {
    alert("Preencha todas as informações.")
  } else {

    tituloFinal.innerHTML = tituloAtual
    duracaoFinal.innerHTML = duracaoAtual
    tipoFinal.innerHTML = tipoAtual
    autorFinal.innerHTML = autorAtual
    urlFinal.innerHTML = urlAtual
    moduloFinal.innerHTML = moduloAtual


    try {
      await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          curso: tituloFinal,
          duracao: duracaoFinal,
          tipo: tipoFinal,
          autor: autorFinal,
          url: urlFinal,
          trilha: "Full Stacks",
          modulo: moduloFinal,
        }),
      });
      alert("Conteúdo adicionado com sucesso!")
      location.reload()
    } catch (err) {
      if (err) {
        console.error("Ocorreu um erro ao enviar os dados de cursos.");
      }
    }
  }

};

export default editarConteudosFs;