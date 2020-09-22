class Mango {
    constructor(x, y) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
      }
    this.x = x;
		this.y = y;
    this.body = Bodies.rectangle(x, y, 100, 100, options);
    this.width = 60;
    this.height = 60;

      World.add(world, this.body);
      this.image = loadImage("sprites/mango.png")
    }
    display(){

      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(20, 30,30, 30);
      pop();
      image(this.image,pos.x, pos.y,this.width,this.height);

    }
  }