class Snake{

constructor(){

this.body = createSprite(100, 100, scl, scl)
this.image = loadImage("Assets/snakeRight.png")
this.body.addImage(this.image)
this.body.x = 100
this.body.y = 100
//image (snakeUp, this.x, this.y, 30, 100)
}

update(){

  this.body.x = this.body.x + this.body.velocityX*scl
  this.body.y = this.body.y + this.body.velocityY*scl
}

movement(){

    if(keyIsDown(RIGHT_ARROW)){

        this.body.velocityX = 1
        this.body.velocityY = 0
       // image (snakeRight, this.x, this.y, 30, 100)
    }
    if(keyIsDown(LEFT_ARROW)){

        this.body.velocityX = -1
        this.body.velocityY = 0
      //  image (snakeLeft, this.x, this.y, 30, 100)
    }
    if(keyIsDown(UP_ARROW)){

        this.body.velocityY = -1
        this.body.velocityX = 0
      //  image (snakeUp, this.x, this.y, 30, 100)
    }
    if(keyIsDown(DOWN_ARROW)){

        this.body.velocityY = +1
        this.body.velocityX = 0
      //  image (snakeDown, this.x, this.y, 30, 100)

    }
}


}