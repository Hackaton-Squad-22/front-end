const conteudo = (entrada) => {
  const conteudo = `
  <section data-id="${entrada._id}" class="conteudo">
  <h6>${entrada.curso}</h6>
  <ul>
    <li class="duracao">${entrada.duracao}</li>
    <li class="autor">${entrada.autor}</li>
    <button class="finished"></button>
  </ul>
</section>
`;
  return conteudo;
};

export default conteudo;
