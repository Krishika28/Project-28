class chain{
    constructor(bodyA,pointB)
    {
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness:0.004,
        length:1
    }
    this.bodyA = bodyA;
    this.pointB = pointB;
    this.chain = Constraint.create(options);
    
    World.add(world,this.chain);
}

attach(body){
    this.chain.bodyA = bodyA;
}

fly(){
    this.chain.bodyA = null;
}
display(){
    if(this.chain.bodyA)
    {
    var pointA = this.bodyA.position;
    var pointB = this.pointB;
    
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x, pointB.y);
    }
}


}