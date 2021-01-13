const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var bgIMG;
var ground;
var hero, fly, monster;
var box1,box2, box3,box4,box5,box6,box7,box8,box9,box10,box11;

function preload() {
//preload the images here
  bgIMG = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(550,490);
  box2 = new Box(550,440);
  box3 = new Box(550,390);
  box4 = new Box(550,340);
  box5 = new Box(550,290);
  box6 = new Box(550,240);

  box7 = new Box(650,490);
  box8 = new Box(650,440);
  box9 = new Box(650,390);
  box10 = new Box(650,340);
  box11 = new Box(650,290);

  hero = new Hero(300,200,200,150);
  fly = new Fly(hero.body,{x: 300, y: 0});

  monster = new Monster(1000,100,200,150);

  ground = new Ground(width/2,500,width,20);

  // create sprites here

}

function draw() {
  background(bgIMG);

  Engine.update(engine);

  detectollision(box1,hero);
  detectollision(box2,hero);
  detectollision(box3,hero);
  detectollision(box4,hero);
  detectollision(box5,hero);
  detectollision(box6,hero);
  detectollision(box7,hero);
  detectollision(box8,hero);
  detectollision(box9,hero);
  detectollision(box10,hero);
  detectollision(box11,hero);
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();


  hero.display();
  // ground.display();
  monster.display();

 
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY});
}

function detectollision(a, b){

  if(a.x - b.x < a.width/2 + b.width/2
    && b.x - a.x < a.width/2 + b.width/2
    &&  a.y - b.y < a.height/2 + b.height/2
    && b.y - a.y < a.height/2 + b.height/2){
    
      Matter.Body.setStatic(monster.body,false);
    
    }

	var distance = dist(a.body.position.x, a.body.position.y, b.body.position.x, b.body.position.y);

	if(distance<=b.width/2 + a.width/2){
		Matter.Body.setStatic(monster.body,false);
	}

}

