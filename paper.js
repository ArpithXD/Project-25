class Paper {
    constructor(x,y,radius) {
        var options = {
            'isStatic': false,
            'restitution': 0.5,
            'friction': 1.0,
            'density':1.2
        }
       this.body = Bodies.circle(x,y,radius,options);
       this.paperImage = loadImage("paper.png");
       World.add(world,this.body);
    }
    display(){
     var pos =this.body.position;
     imageMode(CENTER);
     fill("yellow");
     image(this.paperImage,pos.x, pos.y);
   }
 }