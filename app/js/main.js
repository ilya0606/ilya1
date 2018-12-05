

var BubbleProblem = window.BubbleProblem || {};


BubbleProblem.Game = (function($){

	var Game = function(){

		var curBubble;

		this.init = function(){

			$("#divbutton").bind("click", startGame );

		};
		
		var startGame = function(){

			$("#divbutton").unbind("click", startGame );

			//console.log("here");
			BubbleProblem.ui.hideDialog();
			curBubble = getNextBubble();
			$("#divmain").bind("click", clickGameScreen);
			//$("#dialog").hide("slow");			

		};

		var clickGameScreen = function(event){


			var angle = BubbleProblem.ui.getAngle(event, curBubble);
			var distance = 1000;
			var duration = 500;
			var distrX = Math.sin(angle) * distance;
			var distrY = Math.cos(angle) * distance;


			var bubbleCoords = BubbleProblem.ui.getBubbleCoords(curBubble);
			var coords = {x: bubbleCoords.x + distrX, y: bubbleCoords.y - distrY};

			BubbleProblem.ui.shootBubble(curBubble, coords);


		}; 

		var getNextBubble  = function(){

			var bubble = BubbleProblem.Bubble.create();
			bubble.getSprite().addClass("bubble_cur");
			$("#gamefield").append(bubble.getSprite());
			return bubble;

		}

	}


	return Game;



})(jQuery);


var Game = new BubbleProblem.Game();
Game.init();