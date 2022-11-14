import { exibeProgresso } from "./exibeProgresso.js";

export function calculaPorcentagem(total, amostra, trilha){
  let porcentagem = 0;
  if (amostra > 0){
      porcentagem = ((amostra / total)*100).toFixed(2);
      exibeProgresso(porcentagem, trilha);
      return;
  };
  exibeProgresso(0, trilha);
};

