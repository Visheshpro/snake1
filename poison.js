class Poison{

    constructor(){

        this.body = createSprite(Math.round(random(0,800)), Math.round(random(0,700)), 20, 20)
        this.body.shapeColor = "red"
this.body.lifetime = 30
this.body.addImage(poisonImg)
this.body.scale = 0.2
    }

}