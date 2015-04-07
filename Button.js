$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	var bx = 200;
	var by = 200;

	var random =0;
	
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
		
		
	//////////
	///STATE VARIABLES
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);	
		
		ctx.fillStyle = 'green';
		ctx.fillRect(bx,by,50,50);
		
		ctx.fillStyle = 'black';
		ctx.fillText (mx, 10,10);
		ctx.fillText (my, 60,10);
		
		ctx.font = 'helvetica px. 30';
		ctx.fillText ("Shtuff", 600, 100)
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
	
		if (mx >= bx && mx <= bx + 50 && my >= by && my <= by + 50) 
		alert ("Gotcha... Gotcha... Gotcha");
		
	      
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		
	}, false);




})
