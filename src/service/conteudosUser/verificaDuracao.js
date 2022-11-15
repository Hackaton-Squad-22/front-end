const displayHoras = (duracao) => {
  if (duracao == "") {
    return ""
  } 

  let final = ""
  let horaFinal = ""
  let minutofinal = ""

  const filtro = duracao.split(":")
  if (filtro[0] != "00") {
    if (filtro[0][0] != "0") {
      horaFinal = filtro[0]
    } else {
      horaFinal = filtro[0][1]
    }
    if (filtro[1] != "00") {
      if (filtro[1][0] != "0") {
        minutofinal = filtro[1]
      } else {
        minutofinal = filtro[1][1]
      }
    }
    final = `${horaFinal}h${minutofinal}m`
  } else {
    if (filtro[1] != "00") {
      if (filtro[1][0] != "0") {
        minutofinal = filtro[1]
      } else {
        minutofinal = filtro[1][1]
      }
      final = `${minutofinal}m`
    } else {
      final = ""
    }
  }

return final
}

export default displayHoras