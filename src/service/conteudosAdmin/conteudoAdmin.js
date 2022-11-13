import conteudoFinalizado from "../conteudosUser/conteudoFinalizado.js";
import verificaTipoConteudo from "../conteudosUser/verificaTipoConteudo.js";

const conteudoAdmin = (entrada, cursosIniciados) => {
  const imagem = verificaTipoConteudo(entrada);
  const conteudo = `
  <section data-id="${entrada._id}" data-trilha="${
    entrada.trilha
  }" class="conteudo" href="${entrada.url}" target="_black">
    <div class="conteudo-container">
      <img src="/src/view/images/${imagem}" alt="Ícone de ${entrada.tipo}">
      <div class="info-conteudo-container">
        <h6>${entrada.curso}</h6>
        <ul>
          <li class="duracao">Duração: ${entrada.duracao}</li>
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

export default conteudoAdmin;
