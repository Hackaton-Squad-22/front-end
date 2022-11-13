import verificaTipoConteudo from "../conteudosUser/verificaTipoConteudo.js";

const conteudoAdmin = (entrada, cursosIniciados) => {
  const imagem = verificaTipoConteudo(entrada);
  const conteudo = `
  <section data-id="${entrada._id}" data-trilha="${
    entrada.trilha
  }" class="conteudo" href="${entrada.url}" target="_black">
    <a class="conteudo-container">
      <img src="/src/view/images/${imagem}" alt="Ícone de ${entrada.tipo}">
      <div class="info-conteudo-container">
        <h6>${entrada.curso}</h6>
        <ul>
          <li class="duracao">Duração: ${entrada.duracao}</li>
          <li li class="autor">| Produzido por: ${entrada.autor}</li>
        </ul>
      </div>
    </a>
    <div class="edicao-container" data-nome="Teste Curso">
      <img src="/src/view/images/edit-icon.svg" class="editar-icon" alt="Ícone de editar conteúdo">
      <img src="/src/view/images/lixeira-icon.svg" class="excluir-icon" alt="Ícone de remover conteúdo">
    </div>
  </section>
`;
  return conteudo;
};

export default conteudoAdmin;
