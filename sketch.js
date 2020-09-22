
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var groundObj, tree1,stone1,boy1,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango11,mango10,chain1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   groundObj = new Ground(600,730,1900,15);
   tree1 = new Tree(500,600,20,600);
   boy1 = new Boy(200,800,20,20);
   stone1 = new Stone(180,800,10,10);

   mango1 = new Mango(900,150);
   mango2 = new Mango(950,250);
   mango3 = new Mango(1050,150);
   mango4 = new Mango(1200,200);
   mango5 = new Mango(1135,30);
   mango6 = new Mango(980,60);
   mango7 = new Mango(1050,150);
   mango8 = new Mango(850,300);
   mango9 = new Mango(1300,200);
   mango10 = new Mango(800,200);
   mango11 = new Mango(1250,290);

   chain1= new chain(stone1.body,{x:130,y:515})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(148,229,255));

  chain1.display();
  tree1.display();
  groundObj.display();
  boy1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
 
 detectollision(stone1,mango1);
 detectollision(stone1,mango2);
 detectollision(stone1,mango3);
 detectollision(stone1,mango4);
 detectollision(stone1,mango5);
 detectollision(stone1,mango6);
 detectollision(stone1,mango7);
 detectollision(stone1,mango8);
 detectollision(stone1,mango9);
 detectollision(stone1,mango10);
 detectollision(stone1,mango11);

  drawSprites();
 
}

function mouseDragged(){
  
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  chainobj.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  chainobj.attach(stone1.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 console.log(lmango.width/2+lstone.width/2)
  	if(distance<=lmango.width/2+lstone.width/2)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }



