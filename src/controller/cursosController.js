import adicionaCurso from "../service/adicionaCurso.js";
import enviaCursos from "../service/enviaCursos.js";
import pesquisaCursos from "../service/pesquisaCursos.js";

const conteudo = document.querySelector(".conteudo")
const response = pesquisaCursos("http://localhost:4000/users")
const cursosIniciados = response[1] || []
const userId = response[0]

conteudo.addEventListener("click", () => {
  const cursoId = adicionaCurso(cursosIniciados)

  enviaCursos(`http://localhost:4000/users/${userId}`, cursoId)

})