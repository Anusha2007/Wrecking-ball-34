class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.5,
            length:250
        }
     this.pointB=pointB;
     this.rope=Constraint.create(options);
     World.add(myworld,this.rope);
    }

    display(){
        var point1=this.rope.bodyA.position;
        var point2=this.pointB;
        push ();
        strokeWeight (5);
        stroke (48,22,8);
        line (point2.x,point2.y,point1.x,point1.y);
        pop ();
    }
}