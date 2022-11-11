import verificaTipoConteudo from "./verificaTipoConteudo.js";

const conteudo = (entrada) => {
  const imagem = verificaTipoConteudo(entrada);
  const conteudo = `
  <section data-id="${entrada._id}" class="conteudo">
  <img src="/src/view/images/${imagem}" alt="Ícone de ${entrada.tipo}">
  <h6>${entrada.curso}</h6>
  <ul>
    <li class="duracao">${entrada.duracao}</li>
    <li class="autor">${entrada.autor}</li>
    <img src="/src/view/images/not-finished-icon.svg" alt="Ícone de finalizado">
  </ul>
</section>
`;
  return conteudo;
};

export default conteudo;
