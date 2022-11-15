import displayConteudosAdmin from "../../service/conteudosAdmin/displayConteudosAdmin.js";
import pesquisaConteudos from "../../service/conteudosUser/pesquisaConteudos.js";
import adicionaConteudo from "../../service/cursos/adicionaConteudo.js";
import editaConteudo from "../../service/cursos/editaConteudo.js";
import removeCurso from "../../service/cursos/removeCurso.js";

window.addEventListener("DOMContentLoaded", async () => {
  // Função para adicionar novos conteúdos à trilha
  adicionaConteudo();

  // Pesquisa todos os cursos cadastrados no banco de dados da trilha
  const dados = await pesquisaConteudos(
    "https://squad22-hackathon.herokuapp.com/fullstacks"
  );

  //Display dos conteudos na página
  displayConteudosAdmin(dados);

  // "Controle" dos conteúdos removidos pelo admin
  const lixeira = document.querySelectorAll(".excluir-icon");
  for (let remover of lixeira) {
    // Ao clique no ícone de remover conteúdo, será aberto uma janela de confirmação
    remover.addEventListener("click", () => {
      removeCurso(
        remover.parentElement.dataset.nome,
        remover.parentElement.parentElement.dataset.id
      );
    });
  }

  const edicao = document.querySelectorAll(".editar-icon");
  for (let editar of edicao) {
    // Ao clique no ícone de editar conteúdo, será aberto um modal de edição
    editar.addEventListener("click", () => {
      editaConteudo(dados, editar.parentElement.parentElement.dataset.id);
    });
  }
});
