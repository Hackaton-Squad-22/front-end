import adicionarConteudoFs from "../conteudosAdmin/adicionarConteudoFs.js";

const adicionaConteudo = () => {
  const modal = document.querySelector("#modal-adicionar");
  const abrirModal = document.querySelector(".adiciona-curso");
  const fecharModal = document.querySelector(".add-fechar-modal");
  const submit = document.querySelector(".botao-adicionar-conteudo");

  abrirModal.addEventListener("click", () => {
    modal.showModal();
  });

  fecharModal.addEventListener("click", () => {
    modal.close();
  });

  submit.addEventListener("click", async (e) => {
    e.preventDefault()
    await adicionarConteudoFs("https://squad22-hackathon.herokuapp.com/fullstacks");
  });
};

export default adicionaConteudo;