var PLAY = 1;
var END = 0;
var gameState = PLAY;

var robot, robot_jumping, robot_running, robot_infected;
var ground, invisibleGround, groundImage;

var virusGroup, virus1, virus2, virus3;

var score = 0;

var gameOver, restart;

function preload(){
  virus1 = loadImage("virus1.png");
  virus2 = loadImage("virus2.png");
  virus3 = loadImage("virus3.png");
}

function setup(){
  createCanvas(600, 200);

  robot = createSprite(50,180,20,50);
  robot.scale = 0.5;

  ground = createSprite(200,180,400,20);
  ground.x = ground.width/2;
  ground.velocityX = -2;

  gameOver = createSprite(300,100);

  restart = createSprite(300,140);

  gameOver.scale = 0.5;
  restart.scale = 0.5

  gameOver.visible = false;
  restart.visible = false;

  invisibleGround = createSprite(200,190,400,10)
  invisibleGround.visible = false;

  score = 0;
}

function draw(){
  background(200);
  Text("Score:"+score, 500,50);

  if(keyDown("space")){
    robot.velocityY = -10;
  }

  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  robot.collide(invisibleGround);

  if(gameState === END){
    gameOver.visible = true;
    restart.visible = true;

    ground.velocityX = 0;
    trex.velocityY = 0;

    if(mousePressedOver(restart)) {
      restart();
    }
  }

  drawSprites();

  function restart(){
    gameState = PLAY;
    ground.velocityY = -(6 + 3*score/100);
    gameOver.visible = false;
    restart.visible = false;

    score = 0;
  }
}