const editaConteudo = (dados, conteudoId) => {
  const modal = document.querySelector("#modal-editar");
  const fecharModal = document.querySelector(".edit-fechar-modal");
  const submit = document.querySelector(".btn-editar");
  let tituloAtual, duracaoAtual, tipoAtual, autorAtual, urlAtual, moduloAtual;

  modal.showModal();

  dados.forEach((dado) => {
    if (dado._id === conteudoId) {
      tituloAtual = dado.curso;
      duracaoAtual = dado.duracao;
      tipoAtual = dado.tipo;
      autorAtual = dado.autor;
      urlAtual = dado.url;
      moduloAtual = dado.modulo;
    }
  });

  const tituloFinal = document.querySelector(".edit-conteudo-titulo");
  const duracaoFinal = document.querySelector(".edit-conteudo-duracao");
  const tipoFinal = document.querySelector(".edit-conteudo-tipo");
  const autorFinal = document.querySelector(".edit-conteudo-autor");
  const urlFinal = document.querySelector(".edit-conteudo-url");
  const moduloFinal = document.querySelector(".edit-conteudo-modulo");

  tituloFinal.value = tituloAtual;
  duracaoFinal.value = duracaoAtual;
  tipoFinal.value = tipoAtual;
  autorFinal.value = autorAtual;
  urlFinal.value = urlAtual;
  moduloFinal.value = moduloAtual;

  fecharModal.addEventListener("click", () => {
    modal.close();
  });

  console.log(conteudoId);

  submit.addEventListener("click", async () => {
    const res = confirm("Deseja realmente alterar este conteúdo?");
    if (res) {
      try {
        await fetch(`https://squad22-hackathon.herokuapp.com/fullstacks/${conteudoId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify({
            curso: tituloFinal.value,
            duracao: duracaoFinal.value,
            tipo: tipoFinal.value,
            autor: autorFinal.value,
            url: urlFinal.value,
            modulo: moduloFinal.value,
          }),
        });
        alert("Conteúdo alterado com sucesso!");
        location.reload();
      } catch (err) {
        if (err) {
          console.error("Ocorreu um erro ao enviar os dados de cursos.");
        }
      }
    }
  });
};

export default editaConteudo;
