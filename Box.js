class Box {
    constructor(x,y,width,height){
        var options={
        restitution:0.8,
        friction: 1,
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
        rectMode(CENTER)
        fill("yellow");
        stroke("red");
        strokeWeight (4);
        rect(0,0,this.width,this.height);
        pop ();
    }

}