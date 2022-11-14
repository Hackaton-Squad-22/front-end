import { selecionaBarraDeProgresso, selecionaNumeroDoProgresso } from "./selecionaBarraDeProgresso.js";

export function exibeProgresso(porcentagem, trilha){
  const barraDeProgresso = selecionaBarraDeProgresso(trilha);
  const numeroDoProgresso = selecionaNumeroDoProgresso(trilha);

  if(barraDeProgresso && numeroDoProgresso){
    const progressoDoUsuarioString = `${porcentagem}%`;
    barraDeProgresso.style.transform = `translateX(${progressoDoUsuarioString})`;
    numeroDoProgresso.textContent = progressoDoUsuarioString;
  }
};