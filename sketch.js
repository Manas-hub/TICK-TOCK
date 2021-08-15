function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("White");  
  translate(200,200);
  rotate(-90);
   h= hour();
   m= min();
   s= second();


  sAngle= map(s, 0, 60, 0, 360);
  mAngle= map(m, 0, 60, 0, 360);
  hAngle= map(h %12, 0, 12, 0, 360);

  push()
  rotate(sAngle);
  stroke("red");
  strokeWeight(10);
  line(0, 0, 100, 0);
  pop();

  push()
  rotate(mAngle);
  stroke("Black");
  strokeWeight(15);
  line(0, 0, 80, 0);
  pop()

  push()
  rotate(hAngle);
  stroke("purple");
  strokeWeight(20);
  line(0, 0, 60, 0);
  pop()

  stroke("red");
  strokeWeight(10);
  noFill();

  stroke("red");
  arc(0,0,300,300,0,sAngle);
  stroke("black");
  arc(0,0,275,275,0,mAngle);
  stroke("purple");
  arc(0,0,250,250,0,hAngle);


  drawSprites();
}