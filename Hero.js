class Hero{
    constructor(x,y,width,height){

        var options = {
            frictionAir : 0.005,
            density : 1
        }

        this.x = x;
        this.y = y;
        this.image = loadImage("Superhero-01.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        

        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;
        // var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);

        // rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width - 10, this.height);
        pop();

    }
}