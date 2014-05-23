//Coding library
var m_canvas = document.getElementById("canvas");
var ct = m_canvas.getContext("2d");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var mouseIsPressed = false;
var mouseMoved = false;
var mouseX = 0;
var mouseY = 0;
var canvasWidth = m_canvas.width;
var canvasHeight = m_canvas.height;
var draw;
var FONT = "Aerial";
var TEXTSIZE = "12px";
var angleMode = "radians";
m_canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; },false);
m_canvas.setAttribute("tabindex","0");
m_canvas.focus();
keysn = [];
var keyIsPressed = false;
m_canvas.onkeydown = function(e){
    keysn[e.keyCode]=true;
    keyIsPressed = true;
};
m_canvas.onkeyup = function(e){
    keysn[e.keyCode]=false;
    keyIsPressed = false;
};
m_canvas.onmousedown = function(){
    mouseIsPressed = true;
};
m_canvas.onmouseup = function(){
    mouseIsPressed = false;
};

//Cridit to Simon Sarris for this one. http://simonsarris.com/blog/510-making-html5-canvas-useful
function getMousePos(e) {
    var element = m_canvas, offsetX = 0, offsetY = 0, mx, my;
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }
    //offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    //offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;
    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;
    //alert(mx);
    return { X: mx, Y: my};
};
m_canvas.onmousemove = function(){
    var mousePos = getMousePos(event);
    var offset = 57;
    mouseX = mousePos.X;
    mouseY = mousePos.Y;
};
var fill = function(r,g,b,a){
    if(a!=undefined){
        ct.fillStyle = "rgba("+r+","+g+","+b+","+a/255+")";
    }
    else{
        ct.fillStyle = "rgb("+r+","+g+","+b+")";
    }
    
};
var stroke = function(r,g,b,a){
    if(a!=undefined){
        ct.strokeStyle = "rgba("+r+","+g+","+b+","+a/255+")";
    }
    else{
        ct.strokeStyle = "rgb("+r+","+g+","+b+")";
    }
};
var strokeWeight = function(n){
    ct.lineWidth = ""+n+"";
}
var strokeCap = function(tp){
    ct.lineCap = tp;
}
var noFill = function(){
    ct.fillStyle = "rgba(0,0,0,0)";
}
var noStroke = function(){
    ct.strokeStyle = "rgba(0,0,0,0)";
    ct.lineWidth = 0;
}
//Resizeable ellipse. http://jsbin.com/ovuret/722/edit
function ellipse(x, y, w, h) {
    ct.save();
    ct.beginPath();
    ct.translate(x-w, y-h);
    ct.scale(w, h);
    ct.arc(1, 1, 1, 0, 2 * Math.PI);
    ct.restore();
    ct.stroke();
    ct.fill();
}
//Same here
function arc(x, y, w, h , st, sp) {
    ct.save();
    ct.beginPath();
    ct.translate(x-w, y-h);
    ct.scale(w, h);
    if(angleMode === "degrees"){
        st=st*(Math.PI/180);
        sp=sp*(Math.PI/180);
    }
    ct.arc(1, 1, 1, st, sp);
    ct.restore();
    ct.stroke();
    ct.fill();
}
var rect = function(x,y,w,h){
    ct.fillRect(x,y,w,h);
    ct.strokeRect(x,y,w,h);
};
var line = function(x1,y1,x2,y2){
    ct.beginPath();
    ct.moveTo(x1,y1);
    ct.lineTo(x2,y2);
    ct.stroke();
}
var textAlign = function(mode){
    ct.textAlign = ""+mode;
}
var textSize = function(n){
    TEXTSIZE = n+"px ";
    ct.font = TEXTSIZE+FONT;
}
var textFont = function(f,n){
    TEXTSIZE = n+"px ";
    FONT = f+"";
    ct.font = TEXTSIZE+FONT;
}
//Text breaks. http://stackoverflow.com/a/21574562
var text = function(t, x, y) {
  var lineHeight = ct.measureText("M").width * 1.2;
  var lines = t.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    ct.fillText(lines[i], x, y);
    ct.strokeText(lines[i], x, y);
    y += lineHeight;
  }
}
var background = function(r,g,b){
    var pc = ct.fillStyle;
    fill(r,g,b);
    ct.fillRect(0,0,canvasWidth,canvasHeight);
    ct.fillStyle = pc;
};
var round = function(n){
    return Math.round(n);
}
var random = function(min,max){
    return Math.random()*(max+min)-min;
}
var cos = function(n){
    if(angleMode === "degrees"){
        n=n*(Math.PI/180);
    }
    return Math.cos(n);
}
var sin = function(n){
    if(angleMode === "degrees"){
        n=n*(Math.PI/180);
    }
    return Math.sin(n);
}
var acos = function(n){
    if(angleMode === "degrees"){
        n=n*(Math.PI/180);
    }
    return Math.acos(n);
}
var asin = function(n){
    if(angleMode === "degrees"){
        n=n*(Math.PI/180);
    }
    return Math.asin(n);
}
var sqrt = function(n){
    return(Math.sqrt(n));
}
var pow = function(n,xp){
    return(Math.pow(n,xp))
}
var abs = function(n){
    return(Math.abs(n));
}
var dist = function(x1,y1,x2,y2){
    var w = abs(x1-x2);
    var h = abs(y1-y2);
    return(sqrt(pow(w,2)+pow(h,2)));
}
var getItem = function(key){
    return(JSON.parse(localStorage.getItem(key)));
}
var setItem = function(key,val){
    localStorage.setItem(key,JSON.stringify(val));
}
var deleteItem = function(key){
    localStorage.removeItem(key);
}
var canvasSize = function(w,h){
    m_canvas.width = w;
    m_canvas.height = h;
    canvasWidth = w;
    canvasHeight = h;
}
Audio.prototype.stop = function(){
    this.pause();
    this.currentTime = 0;
}
strokeCap("round");
stroke(0,0,0);
fill(255,255,255);
window.onload=function(){
    if(draw!==undefined){
        setInterval(draw,1000/30);
    }
};