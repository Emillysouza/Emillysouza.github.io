//ator.js
let yAtor=366;
let xAtor=100;
let yAtor2=366;
let xAtor2=320;
let colidiu = false;
let placar= 0;
let placar2= 0;

function mostraPlacar(){
  if(yAtor< 15){//Marca ponto!
  placar +=1;
  voltaAtorParaPosicaoInicial();
    somPonto.play();
  }
 
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text("Placar:" + placar, 180,30);
}

function  verificaColisao(){
 for(let i=0; i< imagensCarros.length; i++){
   //pergunta se colidiu, recebe resposta true ou false
   
   colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i],
altura, xAtor, yAtor, 15);
   
   if(colidiu){
     console.log("colidiu");
     voltaAtorParaPosicaoInicial();
     somColidiu.play();
     
     if(placar > 0)//Só tira ponto se for maior
     placar -= 1;//perde ponto
     
   }//fim do if  
 }//fim do for
}//fim do verificaColisao

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

 function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30);
        }
        

  
function movimentaAtor(){
 if (keyIsDown(UP_ARROW)){
    //Se a tecla w  for pressionada 
    //E o yAtor for maior que 5,então sobe.
    if(yAtor > 5)
    yAtor -= 3;
   
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor < 366)
    yAtor += 3;
  }
}
function mostraAtor2(){
  image(imagemDoAtor2,xAtor2,yAtor2,30,30);
        }
        

  
function movimentaAtor2(){
 if (keyIsDown(UP_ARROW)){
    //Se a seta para cima for pressionada 
    //E o yAtor maior que 5,então sobe.
    if(yAtor2 > 5)
    yAtor2-= 3;
   
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor2 < 366)
    yAtor2 += 3;
  }
}///

function mostraPlacar2(){
  if(yAtor2< 15){//Marca ponto!
  placar2 +=1;
  voltaAtor2ParaPosicaoInicial();
    somPonto.play();
  }
textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text("Placar2:" + placar2, 180,30);
}
  if(colidiu){
     console.log("colidiu");
     voltaAtor2ParaPosicaoInicial();
     somColidiu.play();
     
     if(placar2 > 0)//Só tira ponto se for maior
     placar2 -= 1;//perde ponto
  }
  