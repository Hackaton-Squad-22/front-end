const pesquisaCursosIniciados = async (url) => {
  const response = await fetch(url);
  const dados = await response.json();
  const id = dados[0]._id;
  const cursosFullstacks = dados[0].cursosFullstacks;

  return [id, cursosFullstacks];
};

export default pesquisaCursosIniciados;
