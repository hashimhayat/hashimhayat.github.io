var screenW = window.innerWidth;    // Screen Width
var screenH = window.innerHeight;   // Screen Height
var heart1,heart2,heart3,snow, grid;
var imgArr = [];
var hearts = [];
var flakes = [];
var touches = [];
var theCanvas, lastWidth = screenW;
var fontSize = 50, pressed = true;

function preload() {
  heart1 = loadImage('images/heart.png');
  heart2 = loadImage('images/heartL.png');
  heart3 = loadImage('images/heartR.png');
  snow = loadImage('images/snow.png');
  imgArr.push(heart1); imgArr.push(heart2); imgArr.push(heart3);
}

function setup() {
  
  theCanvas = createCanvas(screenW,screenH);
  
  for (var h = 0; h < 40; h++){
   hearts.push(new Heart());
  }
  
  for (var f = 0; f < 100; f++){
    flakes.push(new Snow());
  }
  
  grid = new Grid(5,5,screenW/2-55,170);
  
}

function draw() {
  background(255);
  displayText();
  
  if (pressed || touchIsDown){
    hearts = [];
    for (var h = 0; h < 40; h++){ hearts.push(new Heart());}
    pressed = false;
  }
  
  for (var h = 0; h < hearts.length; h++){
    hearts[h].display();
    hearts[h].move();
  }
  
  for (var f = 0; f < flakes.length; f++){
    flakes[f].display();
    flakes[f].move();
  }
  
  grid.display();
  if (touches.length > 0) {
    text('Touch at:'+ touches[0].x ,10,10);
  }
    
  
}

function displayText(){
  
  fill("#FFCE00");
  fill("red");
  if (screenW < 400) { textSize(fontSize--);} else {textSize(50); fontSize = 50;}
  textFont("Helvetica");
  var phrase = "I love you, NY.";
  text(phrase,screenW/2-textWidth(phrase)/2,(screenH/2));
  fill("black");
  textSize(12);
  var phrase = "Press L to see the love again.";
  text(phrase,screenW/2-textWidth(phrase)/2,(screenH/2)+30);
}

function Heart(){
  this.idx = int(random(imgArr.length));
  this.img = imgArr[this.idx];
  this.xPos = random(0,(screenW-100));
  this.yPos = random((screenH-200),screenH);
  this.noiseLocation = random(0,1000);
  this.offset = random(0.05,0.15);
  this.pull = random(6,10);
  
  this.display = function(){
    image(this.img, this.xPos, this.yPos);
  }
  
  this.move = function() {
    this.yPos -= this.pull;
    var xMovement = map( noise(this.noiseLocation), 0, 1, -1, 1 );
    this.xPos += xMovement;
    this.noiseLocation += 0.01;
  }
}

function Snow(){
  this.img = snow;
  this.xPos = random(0,(screenW));
  this.yPos = random(-150,150);
  this.noiseLocation = random(0,1000);
  this.offset = random(0.05,0.15);
  this.pull = random(6,10);
  
  this.display = function(){
    
    if (this.yPos >= screenH){this.yPos = random(-10,10); this.xPos = random(0,(screenW));}
    
    image(this.img, this.xPos, this.yPos);
  }
  
  this.move = function() {
    this.yPos += this.pull;
    var xMovement = map( noise(this.noiseLocation), 0, 1, -1, 1 );
    this.xPos += xMovement;
    this.noiseLocation += 0.01;
  }
}

function Grid(row,col,x,y){
  this.row = row;
  this.col = col;
  this.grid = [];
  this.colors = ['#B0171F','#DC143C','#FFB6C1','#EEA2AD'];
  
  for (var c = 0; c < this.row; c++){
    var tmp = [];
    this.grid.push(tmp);
  }
  
  for (var r = 0; r < this.row; r++){
    for (var c = 0; c < this.col; c++){
      this.grid[r][c] = 'hi';
    }
  }
  this.display = function(){
    
    var time = millis();
  
    for (var r = 0; r < this.row; r++){
      for (var c = 0; c < this.col; c++){
        noStroke();
        fill(this.colors[int(random(this.colors.length))]);
        var rec = rect((x+c*20), (y+r*20),18,18);
      }
    }

  }
  
}

function windowResized() {
  screenW = window.innerWidth;    
  screenH = window.innerHeight;  
  theCanvas.size(window.innerWidth, window.innerHeight);
  grid = new Grid(5,5,screenW/2-55,170);
}

function press(){
  pressed = true;
}

function keyPressed(){
  
  if (keyCode == 76){
    press();
  }
}




