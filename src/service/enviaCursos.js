const enviaCursos = async (url, id) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
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
