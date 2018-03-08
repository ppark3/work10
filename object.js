var svg = document.getElementById("svg");
var clear = document.getElementById("clear");

var createCircle = function(e){
    var circle = {
	x:e.offsetX,
	y:e.offsetY,
	r:30,
	c:"blue",
	svg:"circle",
	display:function(){
	    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    c1.setAttribute("cx", this.x);
	    c1.setAttribute("cy", this.y);
	    c1.setAttribute("r", this.r);
	    c1.setAttribute("fill", this.c);
	    svg.appendChild(c1);
	    c1.addEventListener("click", this.color);
	},
	color:function(e){
	    console.log("huh");
	    this.c = "lightsteelblue";
	    console.log(this.c);
	    this.display.c1.setAttribute("fill", this.c);
	    this.addEventListener("click", this.remove);
	    e.stopPropagation();
	},
	remove:function(){
	    svg.removeChild(this);
	    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    c1.setAttribute("cx", Math.random() * 500);
	    c1.setAttribute("cy", Math.random() * 500);
	    c1.setAttribute("r", this.r);
	    c1.setAttribute("fill", this.c);
	    svg.appendChild(c1);
	    c1.addEventListener("click", this.color);
	}
    }
    circle.display();
}
/*
var circle = function(e){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", e.offsetX);
	c1.setAttribute("cy", e.offsetY);
	c1.setAttribute("r", 20);
	c1.setAttribute("fill", "black");
	svg.appendChild(c1);
	c1.addEventListener("click", color);
}
*/
var color = function(e){
	this.setAttribute("fill", "lightsteelblue");
    this.addEventListener("click", remove);
	e.stopPropagation();
}

var remove = function(){
	svg.removeChild(this);
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", Math.random() * 500);
	c1.setAttribute("cy", Math.random() * 500);
	c1.setAttribute("r", 20);
	c1.setAttribute("fill", "black");
	svg.appendChild(c1);
	c1.addEventListener("click", color);
}

var erase = function(){
	while(svg.lastChild){
		svg.removeChild(svg.lastChild);
	}
}

svg.addEventListener("click", createCircle);
clear.addEventListener("click", erase);
