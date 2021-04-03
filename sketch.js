const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
var engine, world;
var PArticles=[];
var PLinkos=[];
var PLinkos1=[];
var PLinkos2=[];
var DIvisions=[];
var divisionheight=300;
var c=0;

function setup() {
  var canvas = createCanvas(1000,800);
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
   

    for(var k=0;k<=width;k=k+80){
      DIvisions.push(new divisions(k,height-divisionheight/2,10,divisionheight) )
    }
    
    Ground=new ground(500,785)
    for(var j=40;j<=width;j=j+50){
      PLinkos.push(new plinko(j,75));
    }
    for(var j=15;j<=width-10;j=j+50){
      PLinkos1.push(new plinko(j,175));
    }
    for(var j=40;j<=width;j=j+50){
      PLinkos2.push(new plinko(j,275));
    }
    
}

function draw() {
  background(0,0,0); 
  Engine.update(engine); 

  

for(var k=0;k<DIvisions.length;k++){
  DIvisions[k].display();
}

Ground.display();
for(var j=0;j<PLinkos.length;j++){
  PLinkos[j].display();
}
for(var j=0;j<PLinkos1.length;j++){
  PLinkos1[j].display();
}
for(var j=0;j<PLinkos2.length;j++){
  PLinkos2[j].display();
}
if(frameCount%60===0){
  PArticles.push(new particle(random(50,950),10,10))
  c++;
}
for(var a=0;a<c;a++){
  PArticles[a].display();
}

  drawSprites();
}