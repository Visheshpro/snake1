class Fruit{

    constructor(){

        this.body = createSprite (Math.round(random(0,800)), Math.round(random(0,700)), 20, 20)
        this.body.shapeColor = "green"
        this.body.lifetime = 30
        this.body.addImage(fruitImg)
        this.body.scale = 0.02
    }
}