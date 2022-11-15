import { consultaUsuarioECursos } from "./consultaUsuarioECursos.js";

const urlFullstack = "https://squad22-hackathon.herokuapp.com/fullstacks";
const urlUX = "https://squad22-hackathon.herokuapp.com/ux";
const urlQA = "https://squad22-hackathon.herokuapp.com/qa";

selecionaTrilha("Fullstacks");
selecionaTrilha("UX");
selecionaTrilha("QA");

function selecionaTrilha(trilha){
  switch(trilha){
    case "QA":
      consultaUsuarioECursos(urlQA, trilha);
      break;
    case "UX":
      consultaUsuarioECursos(urlUX, trilha);
      break;
    default:
      consultaUsuarioECursos(urlFullstack, trilha);
  };
};



