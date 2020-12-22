class Chain{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:100,
        }
        this.pointB=point2;
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}