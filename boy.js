class Boy{
    constructor(x,y,height,width)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.body = Bodies.rectangle(this.x, this.y, options);

        World.add(world, this.body);
		this.image = loadImage("sprites/boy.png");
		
		}
display(){
	var pos =this.body.position;
	rectMode(CENTER);
	rect(pos.x, pos.y, this.width, this.height);
	image(this.image,50,430,400,400);
}
	}
