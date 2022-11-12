const pesquisaCursosIniciados = async (url) => {
  const response = await fetch(url);
  const dados = await response.json();
  const id = dados[0]._id;
  const cursosFullstacks = dados[0].cursosFullstacks;
  const cursosQa = dados[0].cursosQa;
  const cursosUx = dados[0].cursosUx;

  return [id, cursosFullstacks, cursosQa, cursosUx];
};

export default pesquisaCursosIniciados;
