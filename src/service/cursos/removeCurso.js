const removeCurso = async (nomeConteudo, idConteudo) => {
  console.log(idConteudo);
  const confirmacao = confirm(
    `Deseja realmente remover o conteúdo ${nomeConteudo}?`
  );
  if (confirmacao) {
    try {
      await fetch(
        `https://squad22-hackathon.herokuapp.com/fullstacks/${idConteudo}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      )
    } catch {
      if (err) {
        console.error("Ocorreu um erro ao remover o curso.");
      }
    }
    alert("Conteúdo removido com sucesso.");
    location.reload()
  } else {
    return;
  }
};

export default removeCurso;
