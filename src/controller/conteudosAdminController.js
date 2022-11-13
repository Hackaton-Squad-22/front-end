import displayConteudosAdmin from "../service/conteudosAdmin/displayConteudosAdmin.js";
import pesquisaConteudos from "../service/conteudosUser/pesquisaConteudos.js";
import pesquisaCursosIniciados from "../service/cursos/pesquisaCursosIniciados.js";
import removeCurso from "../service/cursos/removeCurso.js";

const baseUrl = "https://squad22-hackathon.herokuapp.com";

window.addEventListener("DOMContentLoaded", async () => {
  const dados = await pesquisaConteudos();
  const response = await pesquisaCursosIniciados(`${baseUrl}/users`);
  // Salva as informações do usuário, referente ao seu ID(para requisição futura) e dos cursos iniciados em cada trilha
  const userId = response[0];
  const cursosFsIniciados = response[1] || [];
  const cursosQaIniciados = response[2] || [];
  const cursosUxIniciados = response[3] || [];
  //Display Gdos conteudos na página
  displayConteudosAdmin(
    dados,
    cursosFsIniciados,
    cursosQaIniciados,
    cursosUxIniciados
  );

  // Controle de conteúdos clicados pelo usuário para cadastro no seu banco
  const conteudos = document.querySelectorAll(".excluir-icon");
  for (let remover of conteudos) {
    // Ao clique no ícone de remover conteúdo, será aberto uma janela de confirmação
    remover.addEventListener("click", () => {
      removeCurso(remover.parentElement.dataset.nome, remover.parentElement.parentElement.dataset.id)
    })    
  }
});
