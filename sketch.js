var sprite = [];

function setup() {
createCanvas(400,400);
var s1 = createSprite(75,200,30,30);
var s2 = createSprite(150,150,30,30);
var s3 = createSprite(300,80,30,30);
var s4 = createSprite(350,90,30,30);

sprite = [s1,s2,s3,s4];

for (var i=0;i<sprite.length; i++){
console.log(sprite[i].position.x);

}

}

function draw() 
{
  
  background(30);
  drawSprites();
}

 

