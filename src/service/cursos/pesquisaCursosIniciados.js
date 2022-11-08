const pesquisaCursosIniciados = async (url) => {
  const response = await fetch(url);
  const dados = response.json();
  const id = dados[0]._id;
  const cursos = dados[0].cursosIniciados;

  return [id, cursos];
};

export default pesquisaCursosIniciados;
