class Ball {
    constructor(x,y,width,height){
        var options={
        frictionAir:0.005,
        density:0.5
    }
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(myworld,this.body);
    }

    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER)
        fill("blue");
        ellipse(0,0,this.width,this.height);
        pop ();
    }

}