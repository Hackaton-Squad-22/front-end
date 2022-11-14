import { obtemUsuario } from "./obtemUsuario.js";
import { calculaPorcentagem } from "./calculaProgresso.js";

export function comparaCursos(valorPromise, trilha) {
  const usuario = obtemUsuario(valorPromise);
  const cursos = valorPromise[1];
  let cursosFiltrados = [];

  if (!usuario) {
    return;
  }

  cursosFiltrados = obtemListaIdCursos(cursos).filter((curso) => {
    if (trilha === "QA") {
      return usuario.cursosQa.includes(curso);
    }
    if (trilha === "Fullstacks") {
      return usuario.cursosFullstacks.includes(curso);
    }
    if (trilha === "UX") {
      return usuario.cursosUx.includes(curso);
    }
  });
  return calculaPorcentagem(cursos.length, cursosFiltrados.length, trilha);
}

function obtemListaIdCursos(cursos) {
  const idCursos = cursos.map((curso) => {
    return curso._id;
  });
  return idCursos;
}
