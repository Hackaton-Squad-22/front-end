import verificaTipoConteudo from "../conteudosUser/verificaTipoConteudo.js";

const conteudoAdmin = (entrada) => {
  const imagem = verificaTipoConteudo(entrada);
  const conteudo = `
  <section data-id="${entrada._id}" data-trilha="${entrada.trilha}" data-modulo="${entrada.modulo}" class="conteudo">
    <a class="conteudo-container" href="${entrada.url}"  target="_black">
      <img src="../../../src/view/images/${imagem}" alt="Ícone de ${entrada.tipo}" class="tipo" data-tipo="${entrada.tipo}">
      <div class="info-conteudo-container">
        <h6 class="titulo">${entrada.curso}</h6>
        <ul>
          <li class="duracao">Duração: ${entrada.duracao}</li>
          <li li class="autor">| Produzido por: ${entrada.autor}</li>
        </ul>
      </div>
    </a>
    <div class="edicao-container" data-nome="${entrada.curso}">
      <img src="../../../src/view/images/edit-icon.svg" class="editar-icon" alt="Ícone de editar conteúdo">
      <img src="../../../src/view/images/lixeira-icon.svg" class="excluir-icon" alt="Ícone de remover conteúdo">
    </div>
  </section>
`;
  return conteudo;
};

export default conteudoAdmin;

