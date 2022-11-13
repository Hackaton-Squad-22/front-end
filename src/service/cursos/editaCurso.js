const editaCurso = () => {
  const modal = document.querySelector("#modal");
  const abrirModal = document.querySelector(".adiciona-curso");
  const fecharModal = document.querySelector(".fechar-modal");
  const submit = document.querySelector(".btn-adicionar");
  const titulo = document.querySelector(".add-conteudo-titulo");

  abrirModal.addEventListener("click", () => {
    modal.showModal();
  });

  fecharModal.addEventListener("click", () => {
    modal.close();
  });

  submit.addEventListener("click", (e) => {
    console.log(titulo.value);
  })

};

export default editaCurso;