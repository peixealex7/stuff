$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	var pic = new Image();
	pic.src = "Images/PokemonTitle.png";
	
//	var menuMusic= new Audio();							//title music
//	menuMusic.src = "Audio/Pokemon Buttons music.mp3"
//	menuMusic.play();
	var menu = 1;	//main menu
	
	var screen = 0;
	

/*	
	stats[1][0] = 1;
	stats[1][4] = 7;
*/
	
	

	var Pokemon=[];
		Pokemon[0]= {name:"Growlith",hp:55, atk:70, def:45, spd:60, type:"fire"};
		Pokemon[1]= {name:"Pikachu", hp:35, atk:55, def:30, spd:90, type:"electric"};
		
	var stats = [];								//testing 2d array
	
	for (var i = 0; i < 2; i++){			
		stats[i] = [];
		for (var j = 1; j < 5; j++){		
				stats[i][j] = 0;
		}
	}
	
	for(var i =0; i < 2; i++){				//displays the stats
		stats[i][0] = Pokemon[i].name;
		stats[i][1] = Pokemon[i].type;
		stats[i][2] = Pokemon[i].hp;
		stats[i][3] = Pokemon[i].atk;
		stats[i][4] = Pokemon[i].def;
		stats[i][5] = Pokemon[i].spd;
	}

	/*
	console.log("Name:" + stats[0][0]);
	console.log("Type:" + stats[0][1]);
	console.log("HP:" + stats[0][2]);
	console.log("ATK:" + stats[0][3]);
	console.log("DEF:" + stats[0][4]);
	console.log("SPD:" + stats[0][5]);
	
	*/
	 
	 
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
	
	//put in objects for bag 
	
	// put in multiple screens
	
	function Buttons(Xpoint,Ypoint,colur){		//objects used to create menu options
		var alex = {
			x:Xpoint,
			y:Ypoint,
			colour: colur,
			width:200,
			height:100,
			draw:function(){
				ctx.fillStyle = this.colour;								//Start game
				ctx.fillRect(this.x,this.y,this.width,this.height);
				
			},
			picture:function (){
				ctx.drawImage(pic,this.x,this.y,this.width*2,this.height*2);
			},
			onClick:function(a,b){							
				return a > this.x && a < this.x+this.width && b > this.y && b < this.y+this.height 
			}, 
			pokemonSearcher:function(n){
			//	Pokedex(n);
			}
		}
		return alex
	}
		
	//main menu
	var startButton = Buttons(250,250,"green");			//menu start button
	var optionButton = Buttons(250, 400, "blue");		// option button
	var Title = Buttons(w/2 - 200, h/2 - 250);			// title text
	
	//bag menu
	var pokemonButton = Buttons(100,200,"red");			//look at party pokemon
	var pokedexButton = Buttons(400, 200, "purple");	//used to find info on the different pokemon
	
	
	
	function finder(n){
	
		for(var i =0; i < 2; i++){
			if(n == stats[i][0]){
				console.log(i);
			}
		}
		
	}

	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);	
	
	
	if(screen == 0){
	
		startButton.draw();		//calls the game start
		optionButton.draw();		//calls the options menu
		Title.picture();		//calls the title text		
			
	}		
		
	else if (screen == 1){
	
		pokemonButton.draw();
		pokedexButton.draw();
		
	}
	
	else if (screen == 2){
	
		
	
	}
		
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
	
	    if(startButton.onClick(mx,my)) {
		//	menuMusic.volume = 0;
			alert ("start game");			//put game start here
			screen ++;
		  
		 }
		  
		if(optionButton.onClick(mx,my)) alert("Options"); //option menu is here if we need it
		  
		if(pokemonButton.onClick(mx,my)) alert("Pokemon");
		  
		if(pokedexButton.onClick(mx,my)){
			var name  = prompt("Insert pokemon name");
			screen = 2;
		//	console.log(name);
		//	finder(name);
		} 
		  
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
