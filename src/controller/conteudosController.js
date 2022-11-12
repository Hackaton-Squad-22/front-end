import pesquisaConteudos from "../service/conteudos/pesquisaConteudos.js";
import conteudo from "../service/conteudos/conteudo.js";
import pesquisaCursosIniciados from "../service/cursos/pesquisaCursosIniciados.js";
import enviaCursos from "../service/cursos/enviaCursos.js";

const moduloInicio = document.querySelector(".modulo-inicio");
const moduloConceitosBasicos = document.querySelector(".modulo-conceitos");
const moduloOpcional = document.querySelector(".modulo-opcional");
const baseUrl = "https://squad22-hackathon.herokuapp.com";

window.addEventListener("DOMContentLoaded", async () => {
  const dados = await pesquisaConteudos();
  const response = await pesquisaCursosIniciados(`${baseUrl}/users`);
  const cursosIniciados = response[1] || [];
  const userId = response[0];

  //Display Gdos conteudos na página
  for (let curso of dados) {
    if (curso.modulo == "inicio") {
      moduloInicio.innerHTML += conteudo(curso, cursosIniciados);
    } else if (curso.modulo == "conceitos-basicos") {
      moduloConceitosBasicos.innerHTML += conteudo(curso, cursosIniciados);
    } else if (curso.modulo == "opcional") {
      moduloOpcional.innerHTML += conteudo(curso, cursosIniciados);
    }
  }

  // Controle de conteúdos clicados pelo usuário para cadastro no seu banco
  const conteudos = document.querySelectorAll(".conteudo");
  for (let conteudo of conteudos) {
    conteudo.addEventListener("click", async () => {
      let verificaCurso = "";
      for (let cursoId of cursosIniciados) {
        if (conteudo.dataset.id === cursoId) {
          verificaCurso = "existente";
          return;
        }
      }
      if (verificaCurso != "existente") {
        cursosIniciados.push(conteudo.dataset.id);
        await enviaCursos(`${baseUrl}/users/${userId}`, cursosIniciados);
      }
    });
  }
});
