let dancerImage;
let dancer = [];
let numberOfDancers = 0;

function preload(){
  dancerImage = loadImage("dancing2.gif");  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  
  for (let i = 0; i < numberOfDancers; i++){
    dancer = new Dancer();
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < dancer.length; i++){
    dancer[i].display();
      if (dancer[i].lifespan < 0){
      dancer.splice(i,1);
    }
  }
}
function mousePressed(){
  dancer.push(new Dancer());
}
class Dancer{
  constructor(){
    this.x = mouseX;
    this.y = mouseY;
    this.d = random(100,200);
    this.lifespan = random(200,360);
  }
  display(){
    image(dancerImage,this.x,this.y,this.d,this.d);
    this.lifespan--;
  }
}