class Chain{
    constructor(body1,body2,offsetX) {
        var options={
            bodyA: body1,
            bodyB: body2,
            offsetX:offsetX            
        }
        this.offsetX=offsetX;
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display() {
        var posA=this.chain.bodyA.position;
        var posB=this.chain.bodyB.position;
        var anchorAX=posA.x+this.offsetX ;
        var anchorAY=posA.y;

        strokeWeight(3);
        line(anchorAX,anchorAY,posB.x,posB.y);
    }
}