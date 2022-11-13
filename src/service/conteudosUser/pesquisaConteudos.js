const pesquisaConteudos = async (url) => {
  const response = await fetch(url);
  const dados = response.json();

  return dados;
};

export default pesquisaConteudos;
