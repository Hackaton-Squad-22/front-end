const verificaTipoConteudo = (conteudo) => {
  if (conteudo.tipo === "Curso") {
    return "cursos-icon.svg";
  } else if (conteudo.tipo === "Artigo") {
    return "artigos-icon.svg";
  } else if (conteudo.tipo === "Livro" || conteudo.tipo == "Apostila") {
    return "livros-icon.svg";
  } else if (conteudo.tipo === "Vídeo" || conteudo.tipo === "Live" || conteudo.tipo == "Playlist") {
    return "videos-icon.svg";
  } else if (conteudo.tipo === "Podcast") {
    return "podcast-icon.svg";
  } else if (conteudo.tipo === "Glossário") {
    return "glossario-icon.svg";
  } else if (conteudo.tipo === "Ferramenta") {
    return "ferramenta-icon.svg";
  } else if (conteudo.tipo === "Desafio") {
    return "desafio-icon.svg";
  } 
};

export default verificaTipoConteudo