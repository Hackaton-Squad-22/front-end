const pesquisaConteudos = async () => {
  const response = await fetch(
    "https://squad22-hackathon.herokuapp.com/fullstacks"
  );
  const dados = response.json();

  return dados;
};

export default pesquisaConteudos;
