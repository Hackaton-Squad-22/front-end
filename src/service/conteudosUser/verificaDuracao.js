const verificaDuracao = (duracao) => {
  const filtro = duracao.split(":")
  if (filtro[0] == "00") {
    return `${filtro[1]}:${filtro[2]}`
  } else {
    return duracao
  }
}

export default verificaDuracao