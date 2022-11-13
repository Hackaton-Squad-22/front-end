import pesquisaConteudos from "../service/conteudosUser/pesquisaConteudos.js";
import pesquisaCursosIniciados from "../service/cursos/pesquisaCursosIniciados.js";
import enviaCursos from "../service/cursos/enviaCursos.js";
import displayConteudosUser from "../service/conteudosUser/displayConteudosUser.js";

const baseUrl = "https://squad22-hackathon.herokuapp.com";

window.addEventListener("DOMContentLoaded", async () => {
  const dados = await pesquisaConteudos(`${baseUrl}/fullstacks`);
  const response = await pesquisaCursosIniciados(`${baseUrl}/users`);
  // Salva as informações do usuário, referente ao seu ID(para requisição futura) e dos cursos iniciados em cada trilha
  const userId = response[0];
  const cursosFsIniciados = response[1] || [];
  const cursosQaIniciados = response[2] || [];
  const cursosUxIniciados = response[3] || [];

  //Display Gdos conteudos na página
  displayConteudosUser(
    dados,
    cursosFsIniciados,
    cursosQaIniciados,
    cursosUxIniciados
  );

  // Controle de conteúdos clicados pelo usuário para cadastro no seu banco
  const conteudos = document.querySelectorAll(".conteudo");
  for (let conteudo of conteudos) {
    // Ao clique do usuário, verifica primeiro se ele já foi interagido
    conteudo.addEventListener("click", async () => {
      let verificaCurso = "";
      for (let cursoId of cursosFsIniciados) {
        if (conteudo.dataset.id === cursoId) {
          verificaCurso = "existente";
          return;
        }
      }
      // Se não for interagido, adiciona ele aos conteúdos interagiso
      if (verificaCurso != "existente") {
        if (conteudo.dataset.trilha === "Full Stacks") {
          cursosFsIniciados.push(conteudo.dataset.id);
        } else if (conteudo.dataset.trilha === "QA") {
          cursosQaIniciados.push(conteudo.dataset.id);
        } else if (conteudo.dataset.trilha === "UX") {
          cursosUxIniciados.push(conteudo.dataset.id);
        }
        // Envia para o back-end o novo array de cursos interagidos pelo usuário
        await enviaCursos(
          `${baseUrl}/users/${userId}`,
          cursosFsIniciados,
          cursosQaIniciados,
          cursosUxIniciados
        );
        /*         displayConteudos(dados, cursosFsIniciados, cursosQaIniciados, cursosUxIniciados)
         */
      }
    });
  }
});
