const editaCurso = () => {
  const modal = document.querySelector("#modal");
  const abrirModal = document.querySelector(".adiciona-curso");
  const fecharModal = document.querySelector(".fechar-modal");
  const enviarDados = document.querySelector(".btn-adicionar");

  abrirModal.addEventListener("click", () => {
    modal.showModal();
  });

  fecharModal.addEventListener("click", () => {
    modal.close();
  });

  enviarDados.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("teste");
  })

};

export default editaCurso;
