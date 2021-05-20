var bgColor;
var slider; // the slider element
var deg = 0 ;//variable for rotation

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  colorMode(HSB);
  bgColor = color( random(255), random(255), random(255) );
   // slider has a range between 0 and 255 with a starting value of 127
   slider = createSlider(3,50,10);//create slider
  slider.size(200);//length of slider
  slider.position(320, 570);//position of slider

}

function draw() {
  a=map(mouseX,0,width,0,90);
  background(bgColor);
  stroke(slider.value());
  translate(width/2,height);
  stroke(slider.value(), 255, 255);
//strokeWeight(2);
  tree(width*0.3,a);
// noLoop();
  translate(200,200);//set origin of the line
    rotate(radians(deg));//rotate line function
  strokeWeight(slider.value());//set slider to control the lines stroke weight
  ellipse(-450, -600, 150, 150);//draw line and position
  let c = color(400, 204, 0);
fill(c);


  fill(slider.value(), 255, 255, 127);


}

function tree(len,theta)
{
  strokeWeight(len/25+1);

  line(0,0,0,-len);
  translate (0,-len);
  len*=0.69;
  if(len>2){
   push();
   rotate(theta);
   tree(len,theta);
   pop()
   push();
   rotate(-theta);
   tree(len,theta);
   pop();
  }

    //count++;
}


function mousePressed(){
	bgColor = color( random(255), random(255), random(255) );
   // if (count === 3)
    //stroke  = (1, 90, 60);
    //count = 0;
  }




function keyPressed() {
  if (keyCode === 32) {//if spacebar is pressed
    deg = random(0, 100, 1000);//roteer vierkant tussen 0 and 100
  }
}



   
