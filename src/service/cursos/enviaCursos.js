const enviaCursos = async (url, cursosFullstacks = [], cursoQa = [], cursoUx = []) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        cursosFulltacks: cursosFullstacks,
        cursosQa: cursoQa,
        cursosUx: cursoUx,
      }),
    });
    const dados = response.json();
    return dados;
  } catch (err) {
    if (err) {
      console.error("Ocorreu um erro ao enviar os dados de cursos.");
    }
  }
};

export default enviaCursos;
