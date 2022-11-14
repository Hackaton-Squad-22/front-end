export function obtemUsuario(valorPromise){
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