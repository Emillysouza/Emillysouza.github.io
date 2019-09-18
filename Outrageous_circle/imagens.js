//imagens.js
//definição das variaveis no jogo 
let imagemDaEstrada;
let imagemDoAtor;
let imagensCarros = [];//Array de imagens

//Sons
let trilhasonora;
let somColidiu;
let somPonto;

function preload(){
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColidiu = loadSound("sons/colidiu.mp3"); 
  somPonto = loadSound("sons/pontos.wav");
  //Pre carregamento das imagens nas variaveis
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoAtor2 = loadImage("imagens/ator-1.png");
  imagensCarros[0] = loadImage("imagens/carro-1.png");
  imagensCarros[1] = loadImage("imagens/carro-2.png");
  imagensCarros[2] = loadImage("imagens/carro-3.png");
  // mais 3 carrinhos
  imagensCarros[3] = loadImage("imagens/carro-1.png");
  imagensCarros[4] = loadImage("imagens/carro-2.png");
  imagensCarros[5] = loadImage("imagens/carro-3.png");
  
  
  {
}
}