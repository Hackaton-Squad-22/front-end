const adicionarCursoFs = async (baseUrl) => {
  const titulo = document.querySelector(".add-conteudo-titulo").value;
  const duracao = document.querySelector(".add-conteudo-duracao").value;
  const tipo = document.querySelector(".add-conteudo-tipo").value;
  const autor = document.querySelector(".add-conteudo-autor").value;
  const url = document.querySelector(".add-conteudo-url").value;
  const modulo = document.querySelector(".add-conteudo-modulo").value;

  if (titulo == "" || duracao == "" || tipo == "" || autor == "" || url == "" || modulo == "") {
    alert("Preencha todas as informações.")
  } else {
    try {
      await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          curso: titulo,
          duracao: duracao,
          tipo: tipo,
          autor: autor,
          url: url,
          trilha: "Full Stacks",
          modulo: modulo,
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

export default adicionarCursoFs;
