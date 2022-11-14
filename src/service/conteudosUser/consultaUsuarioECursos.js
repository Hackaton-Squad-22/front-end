import { comparaCursos } from "./filtraCursosUsuario.js";

const urlUsuarios = "https://squad22-hackathon.herokuapp.com/users";

export async function consultaUsuarioECursos(url, trilha){
  try{
    const usuariosRes = await fetch(urlUsuarios);
    const usuarios = await usuariosRes.json();

    const cursoRes = await fetch(url);
    const cursos = await cursoRes.json();
    Promise.all([usuarios, cursos]).then(valor => comparaCursos(valor, trilha));
  } catch (err) {
    console.log(err);
  };
};