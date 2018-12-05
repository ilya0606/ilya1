var BubbleProblem = window.BubbleProblem || {};


BubbleProblem.ui = (function($){

	var ui = {
		hideDialog : function(){

			$("#dialog").hide("slow");			
		},

		getBubbleCoords: function(bubble){

			var coords = bubble.getSprite().position();
			return {x: coords.left + 22, y: coords.top + 22};
		},

		getClickCoords: function(event){

			return {x: event.pageX, y: event.pageY};

		},

		getAngle: function(event, curBubble){

			var clickCoords = ui.getClickCoords(event);
			var bubbleCoords = ui.getBubbleCoords(curBubble);
			var gameFieldOffset = $("#gamefield").offset();


			var angle = Math.atan( (clickCoords.x - bubbleCoords.x - gameFieldOffset.left)/
				(bubbleCoords.y - clickCoords.y + gameFieldOffset.top)	);

			return angle;


		},

		shootBubble: function(curBubble, coords, duration){

			curBubble.getSprite().animate({ top: coords.y, left: coords.x},
				{duration: duration, easing: "linear"});

		},






	}


	return ui;

})(jQuery)
