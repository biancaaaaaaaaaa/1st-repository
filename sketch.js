var xbolinha = 200;
let yBolinha = 150;
let diametro = 17;
let raio = diametro / 2;
let colidiu = false;
//variaveis movimento bolinha
let velocidadexbola = 7;
let velocidadeybolinha = 7;

//variaveis raquete
let xraq = 5;
let yraq = 135;
let wraq = 7;
let hraq = 97;

//variaveis oponente
let xraq2 = 588;
let yraq2 = 135;
let wraq2 = 7;
let hraq2 = 97;
let velocidadeyoponente;

//placar
let meuspontos = 0;
let pontosoponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrabola();
  andabola();
  bordabola();
  mostraraq(xraq,yraq);
  mostraraq(xraq2,yraq2);
  movimentaMinhaRaquete();
  movimentaraqoponente();
  colisaoraq();
  verificacolisaoraq(xraq,yraq);
  verificacolisaoraq(xraq2,yraq2);
  incluirplacar();
  marcaponto();

}
function mostrabola(){
  circle(xbolinha, yBolinha, diametro);
  }
function andabola(){
  xbolinha += velocidadexbola;
  yBolinha += velocidadeybolinha;
  }
function bordabola(){
  if (xbolinha + raio > width || xbolinha - raio < 0) velocidadexbola *= -1;
  if (yBolinha + raio > height || yBolinha - raio < 0) velocidadeybolinha *= -1;
}
function mostraraq(x,y){
  rect(x, y, wraq, hraq);
      }
function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yraq -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yraq += 10;
  }
}
function colisaoraq(){
  if (xbolinha - raio < xraq + wraq && yBolinha - raio < yraq + hraq){
    velocidadexbola *= -1;
  }
}
function verificacolisaoraq(x,y){
  colidiu = collideRectCircle(x, y, wraq, hraq, xbolinha, yBolinha, raio);
  if (colidiu){
    velocidadexbola *= -1;
  }
}
function movimentaraqoponente(){
  velocidadeyoponente = yBolinha - yraq2 - wraq / 2 - 30;
  yraq2 += velocidadeyoponente
}
function incluirplacar(){
  textAlign (CENTER);
  textSize (16);
  stroke (255)
  fill ("orange");
  rect (150, 10, 40, 20);
  fill (255);
  text(meuspontos, 170, 26);
  fill ("orange");
  rect (450, 10, 40, 20);
  fill (255);
  text(pontosoponente, 470, 26);
}
function marcaponto(){
  if (xbolinha > 590){
    meuspontos += 1;
  }
  if (xbolinha < 10){
    pontosoponente += 1;
  }
}
