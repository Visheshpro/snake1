var snakeUp
var snakeDown
var snakeLeft
var snakeRight
var poison

var scl = 20

var missed = 0
var lives = 3

var gameState = "play"

function preload(){

  snakeUp = loadImage("/Assets/snakeUp.png")
  snakeLeft = loadImage("/Assets/snakeLeft.png")
  snakeRight = loadImage("/Assets/snakeRight.png")
  snakeDown = loadImage("/Assets/snakeDown.png")

  fruitImg = loadImage("Assets/fruit.png")
  poisonImg = loadImage("Assets/poison.png")
}

function setup() {
  createCanvas(800,700);
  frameRate(10)

  snake = new Snake()
  fruit = new Fruit()
  poison = new Poison()
}

function draw() {
  background(0);
  edges = createEdgeSprites()

  textSize(18)
text ("MISSED:" + missed, 20, 20)
text ("LIVES:" + lives, 700, 20)

  snake.movement()
  snake.update()

  if(snake.body.isTouching(fruit.body)){

    fruit.body.destroy()

  
  }

  if(snake.body.isTouching(edges)){
    
    snake.body.destroy()
    lives = lives - 1
  }

if(gameState === "play"){
  if (frameCount % 70 === 0){

    poison = new Poison()
  }

  if(frameCount % 50 === 0){

    fruit = new Fruit()
  }
}

  if(poison.body){
  if(snake.body.isTouching(poison.body)){

    snake.body.destroy()
    lives = lives - 1
  }
  if(lives === 0){

    gameState = "end"
  }

if(missed === 10){

  gameState = "end"
}

  if(gameState === "end"){

    textSize(25)
    text("You Lost", 300, 350)
  }
}

if(fruit.body.lifetime === 1){

    missed++        
}
drawSprites()
}