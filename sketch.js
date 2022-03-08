var nave;
var limite;
var parede1;
var parede2;
var tiro;
var tiros;
var inimigos;
var tiros_matriz=[];
var inimigos_matriz=[];
var score;

function preload() {
  naveImage = loadImage("naveverde.png");
  inimigoImage = loadImage("inimigo.png");
  tiroImage = loadImage("tiro.png");
  inimigoAnimacao = loadAnimation("i2.png","inimigo.png")
}

function setup() {
  createCanvas(400, 400);
  nave = createSprite(200, 330, 40, 50);
  nave.addImage(naveImage);
  nave.scale = 0.12
  parede1 = createSprite(400, 200, 1, 400)
  parede2 = createSprite(1, 200, 1, 400)
  parede1.visible = false
  parede2.visible = false
  
  inimigos = new Group();
  tiros = new Group();
  limite = createEdgeSprites;
  criarinimigos(65);
  criarinimigos(65 + 40);
  criarinimigos(65 + 40 + 40);
  console.log(inimigos_matriz.length);
}

function draw() {

  background("black");

 
  drawSprites();

  if (keyIsDown(RIGHT_ARROW)) {
    nave.position.x = nave.position.x + 8;
  }
  if (keyIsDown(LEFT_ARROW)) {
    nave.position.x = nave.position.x - 8;
  }
  if (keyDown("space")) {
    atirar();
  }

  
  //console.log(nave.y);
  nave.collide(parede1);
  nave.collide(parede2);

  

for (var i = 0; i < tiros_matriz.length; i++) {

	for (var j = 0; j < inimigos_matriz.length; j++) {

			if (tiros_matriz[i].isTouching(inimigos_matriz[j])) {
      
        inimigos_matriz[j].destroy();
        tiros_matriz[i].destroy();
        break;
			
		  }
	}
}

}








function atirar() {

  if (frameCount % 14 === 0) {
    tiro = createSprite(nave.x, nave.y - 7, 5, 18)
    tiro.velocityY = -15
    tiro.addImage(tiroImage)
    tiro.scale = 0.055
    tiro.lifetime = 100;
    tiros_matriz.push(tiro);
    tiros.add(tiro);
  
  }
}

function criarinimigos(y) {
  for (c = 1; c < 7; c++) {
    var inimigo = createSprite(60 * c, y, 40, 30);
    inimigo.addAnimation("inimigos",inimigoAnimacao);
    //inimigo.addImage(inimigoImage);
    inimigo.scale = 0.15;
    inimigo.debug=true;
    inimigos_matriz.push(inimigo);
    inimigos.add(inimigo);

  }

}
