class Plinko {

    constructor(x, y,radius) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':0.3,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius-10,options);   
        this.radius = radius-10;
        World.add(world, this.body);
      }
     display(){
      var pos = this.body.position
       ellipseMode(RADIUS);
       fill ("white");
       ellipse(pos.x,pos.y,this.radius,this.radius)


     }

  }