const editaCurso = () => {
  const modal = document.querySelector("#modal");
  const abrirModal = document.querySelector(".adiciona-curso");
  const fecharModal = document.querySelector(".fechar-modal");

  abrirModal.addEventListener("click", () => {
    modal.showModal();
  });

  fecharModal.addEventListener("click", () => {
    modal.close();
  });
};

export default editaCurso;
