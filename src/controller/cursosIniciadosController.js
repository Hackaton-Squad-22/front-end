import adicionaCurso from "../service/cursos/adicionaCurso.js";
import enviaCursos from "../service/cursos/enviaCursos.js";
import pesquisaCursosIniciados from "../service/cursos/pesquisaCursosIniciados.js";

const conteudos = document.querySelectorAll(".conteudo");
const response = pesquisaCursosIniciados(
  "https://squad22-hackathon.herokuapp.com/users"
);
const cursosIniciados = response[1] || [];
const userId = response[0];

for (let conteudo of conteudos) {
  conteudo.addEventListener("click", () => {
    const cursosId = adicionaCurso(cursosIniciados);

    enviaCursos(`https://squad22-hackathon.herokuapp.com//users/${userId}`, cursosId);
  });
}
