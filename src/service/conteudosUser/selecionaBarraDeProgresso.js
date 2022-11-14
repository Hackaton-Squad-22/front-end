export function selecionaBarraDeProgresso(trilha){
  console.log(trilha)
  let barraDeProgresso = '';
  if (trilha === 'Fullstacks'){
    barraDeProgresso = document.querySelector('[data-progresso-barra="fullstack"]');
  }
  if(trilha === 'UX'){
    barraDeProgresso = document.querySelector('[data-progresso-barra="ux"]');
  }
  if(trilha === 'QA'){
    barraDeProgresso = document.querySelector('[data-progresso-barra="qa"]');
  }
  return barraDeProgresso;
}

export function selecionaNumeroDoProgresso(trilha){
  let numeroProgresso = '';
  if (trilha === 'Fullstacks'){
    numeroProgresso = document.querySelector('[data-progresso-numero="fullstack"]');
  }
  if(trilha === 'UX'){
    numeroProgresso = document.querySelector('[data-progresso-numero="ux"]');
  }
  if(trilha === 'QA'){
    numeroProgresso = document.querySelector('[data-progresso-numero="qa"]');
  }
  return numeroProgresso;
}