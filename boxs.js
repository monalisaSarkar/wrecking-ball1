class Box{
    constructor(x,y,width,height){
        //var options={
           // restitution:1.0,
            //density:0.8,
           // friction:0.3,
       // }
        this.body=Bodies.rectangle(x,y,50,50)
        this.width=50;
        this.height=50;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}