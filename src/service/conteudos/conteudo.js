const conteudo = (entrada) => {
  const conteudo = `
  <section>
  <h3>${entrada.curso}</h3>
  <ul>
    <li class="duracao">${entrada.duracao}</li>
    <li class="autor">${entrada.autor}</li>
    <button class="finished"></button>
  </ul>
</section>
`;
  return conteudo;
};

export default conteudo