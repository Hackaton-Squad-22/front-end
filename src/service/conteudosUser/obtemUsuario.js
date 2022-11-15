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
  // Id provisório (utilizado apenas para demostração da funcionalidade)
  return '636ba55ae03538b208450ee6';
  
  // Caso o href da aplicação seja no formato abaixo, com o pathname '/users/{id}', retirar o retorno dom o id provisório e substituir pelo idAtual
  // 'https://endereco.com/users/0123456789'

  return idAtual; //inativo
};