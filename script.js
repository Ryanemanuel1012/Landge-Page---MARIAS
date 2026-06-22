const imagens = [
  "MARIAS.png",
  "MARIAS1.png",
  "MARIAS2.png",
  "MARIAS3.png",
  "MARIAS4.png",
  "MARIAS5.png"
];

let atual = 0;

const img = document.querySelector(".carrossel img");

function trocarImagem(novaIndex){

  img.style.opacity = "0";
  img.style.transform = "scale(0.98)";

  setTimeout(() => {

    img.src = imagens[novaIndex];

    img.style.opacity = "1";
    img.style.transform = "scale(1)";

  }, 200);

}

function avancar(){

  atual++;

  if(atual >= imagens.length){
    atual = 0;
  }

  trocarImagem(atual);
}

function voltar(){

  atual--;

  if(atual < 0){
    atual = imagens.length - 1;
  }

  trocarImagem(atual);
}