const verificaTipoConteudo = (conteudo) => {
  if (conteudo.tipo === "Curso") {
    return "cursos-icon.svg";
  } else if (conteudo.tipo === "Artigo") {
    return "artigos-icon.svg";
  } else if (conteudo.tipo === "Livro") {
    return "livro-icon.svg";
  } else if (conteudo.tipo === "Vídeo") {
    return "videos-icon.svg";
  } else if (conteudo.tipo === "Live") {
    return "podcast-icon.svg";
  } else if (conteudo.tipo === "Glossário") {
    return "glossario-icon.svg";
  }
};

export default verificaTipoConteudo