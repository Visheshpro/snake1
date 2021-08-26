class Pendulum {

constructor(x, y, width, height,ask){

 var options={

    density:0.001,
    friction:0.1,
    isStatic: ask
 }

    this.pendulum = Bodies.rectangle(x, y, 20, 200,options)
    this.width = width
    this.height = height
    World.add(world, this.pendulum)
}

display()
    {
        var pos=this.pendulum.position;
        push();
        rectMode(CENTER);
        rect(pos.x,pos.y,20,200);
        pop();     
    }
}
