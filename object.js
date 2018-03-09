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
	    c1.addEventListener("click", this.color, true);
	},
	color:function(e){
		this.c = "lightsteelblue";
		this.setAttribute("fill", this.c);
		console.log(this.c);
		e.stopPropagation();
		this.removeEventListener("click", this.color, true);
		this.addEventListener("click", circle.removeCircle, true);
	},
	removeCircle:function(){
	    svg.removeChild(this);
	    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    c1.setAttribute("cx", Math.random() * 500);
	    c1.setAttribute("cy", Math.random() * 500);
	    c1.setAttribute("r", circle.r);
	    c1.setAttribute("fill", circle.c);
	    svg.appendChild(c1);
	    c1.addEventListener("click", circle.color);
	}
    }
    circle.display();
}

var erase = function(){
	while(svg.lastChild){
		svg.removeChild(svg.lastChild);
	}
}

svg.addEventListener("click", createCircle);
clear.addEventListener("click", erase);
