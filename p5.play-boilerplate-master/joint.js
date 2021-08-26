class Joint {

constructor(BodyA, pointb){

var options={

    bodyA:BodyA,
    bodyB:pointb,
    stiffness:0.03
}

    this.joint = Constraint.create(options)
World.add(world, this.joint)
}

}