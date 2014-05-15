HI! This is my very first coding library! So far so good!

Put this in your HTML:
<canvas id="canvas" width="400" height= "400">
     Oh no! You don't have HTML5!
</canvas>
<script type = "text/javascript" src = “(File directory of library)”></script>
<script type = "text/javascript" src = “(File directory of code)”></script>
And you can get coding!
This is based of of Processing.js

        DOCUMENTARY
=====================

var draw = function(){
     //This code will repeat!
};

Drawing
–––––––
background(red,green,blue);//Changes background color of the canvas.
ill(red,green,blue);//Will fill objects after this function
stroke(red,green,blue);//Changes color of the “stroke”, or borders of objects
strokeWeight(size);//Will change how large the stroke is.
noStroke();//Removes stroke
noFill();//Removes fill

rect(xpos,ypos,width,height);//Draws a rectangle
ellipse(xpos,ypos,xradius,yradius);//Draws an ellipse centered on xpos and ypos
line(x1,y1,x2,y2);//Draws a line from position one to position two
arc(xpos,ypos,xradius,yradius,start,stop);//Partial ellipse


Math 
––––
//basically, these are bunch of functions that I made easier for beginners, most of these are self explanatory. I don’t have all of them, but the ones I use are in there.

round(n);
random(min,max);
cos(n);
sin(n);
acos(n);
asin(n);
 