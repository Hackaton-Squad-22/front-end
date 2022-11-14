const urlUsuarios = "https://squad22-hackathon.herokuapp.com/users";
const urlFullstack = "https://squad22-hackathon.herokuapp.com/fullstacks";
const urlUX = "https://squad22-hackathon.herokuapp.com/ux";
const urlQA = "https://squad22-hackathon.herokuapp.com/qa";

// selecionaTrilha("Fullstacks");
// selecionaTrilha("UX");
selecionaTrilha("QA");

function selecionaTrilha(nome){
  switch(nome){
    case "QA":
      consultaBancoDeDados(urlQA, nome);
      break;
    case "UX":
      consultaBancoDeDados(urlUX, nome);
      break;
    default:
      consultaBancoDeDados(urlFullstack, nome);
  };
};

async function consultaBancoDeDados(url, nome){
  try{
    const usuariosRes = await fetch(urlUsuarios);
    const usuarios = await usuariosRes.json();

    const cursoRes = await fetch(url);
    const cursos = await cursoRes.json();
    Promise.all([usuarios, cursos]).then(valor => comparaCursos(valor, nome));
  } catch (err) {
    console.log(err);
  };
};

function obtemUsuario(valorPromise){
  const usuarios = valorPromise[0];
  const idAtual = obtemIdUsuarioAtual();
  const usuarioAtual = usuarios.find(usuario => usuario._id === idAtual);
  return usuarioAtual;
};

function obtemIdUsuarioAtual(){
  const preIdLength = location.pathname.indexOf("/", 1);
  const inicioId = preIdLength + 1;
  const idAtual = location.pathname.substring(inicioId);
  return idAtual;
};

function comparaCursos(valorPromise, nome){
  const usuario = obtemUsuario(valorPromise);
  const cursos = valorPromise[1];
  let cursosFiltrados = [];
  cursosFiltrados = obtemListaIdCursos(cursos).filter(curso => {
    if (nome === "QA"){
        return usuario.cursosQa.includes(curso);
    };
    if (nome === "Fullstacks"){
            return usuario.cursosFullstacks.includes(curso);
    };
    if (nome === "UX"){
            return usuario.cursosUx.includes(curso);
    };
  })
  return obtemPorcentagem(cursos.length, cursosFiltrados.length);
}

function obtemListaIdCursos(cursos){
  const idCursos = cursos.map(curso => {
      return curso._id;
  });
  return idCursos;
};

function obtemPorcentagem(total, amostra){
  let porcentagem = 0;
  if (amostra > 0){
      porcentagem = ((amostra / total)*100).toFixed(2);
      console.log('porcentagem', porcentagem)
      mostraProgresso(porcentagem);
      return;
  };
  mostraProgresso(0);
};

function mostraProgresso(porcentagem){
  const barraDeProgresso = document.querySelector('[data-progresso="barra"]');
  const progressoNumero = document.querySelector('[data-progresso="numero"]');
  const progressoDoUsuarioString = `${porcentagemz}%`;
  console.log(progressoDoUsuarioString);
  barraDeProgresso.style.transform = `translateX(${progressoDoUsuarioString})`;
  progressoNumero.textContent = progressoDoUsuarioString;
};




