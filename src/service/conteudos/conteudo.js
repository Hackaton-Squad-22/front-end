import conteudoFinalizado from "./conteudoFinalizado.js";
import verificaDuracao from "./verificaDuracao.js";
import verificaTipoConteudo from "./verificaTipoConteudo.js";

const conteudo = (entrada, cursosIniciados) => {
  const imagem = verificaTipoConteudo(entrada);
  const conteudo = `
  <section data-id="${entrada._id}" class="conteudo">
    <div class="conteudo-container">
      <img src="/src/view/images/${imagem}" alt="Ícone de ${entrada.tipo}">
      <div class="info-conteudo-container">
        <h6>${entrada.curso}</h6>
        <ul>
          <li class="duracao">Duração: ${verificaDuracao(entrada.duracao)}</li>
          <li li class="autor">| Produzido por: ${entrada.autor}</li>
        </ul>
      </div>
    </div>
    <img src="/src/view/images/${conteudoFinalizado(
      cursosIniciados,
      entrada._id
    )}" class="status" alt="Ícone de status do conteúdo">
  </section>
`;
  return conteudo;
};

export default conteudo;
