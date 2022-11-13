import adicionarCursoFs from "../conteudosAdmin/adicionarCursoFs.js";

const adicionaConteudo = () => {
  const modal = document.querySelector("#modal");
  const abrirModal = document.querySelector(".adiciona-curso");
  const fecharModal = document.querySelector(".fechar-modal");
  const submit = document.querySelector(".btn-adicionar");

  abrirModal.addEventListener("click", () => {
    modal.showModal();
  });

  fecharModal.addEventListener("click", () => {
    modal.close();
  });

  submit.addEventListener("click", async (e) => {
    e.preventDefault()
    await adicionarCursoFs("https://squad22-hackathon.herokuapp.com/fullstacks");
    
  });
};

export default adicionaConteudo;
