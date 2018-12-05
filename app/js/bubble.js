var BubbleProblem = window.BubbleProblem || {};


BubbleProblem.Bubble = (function($){

	var Bubble = function(sprite){
		var that = this;
		this.getSprite = function(){return sprite;};

	};

	Bubble.create = function(){

		var sprite = $("<div>");
		sprite.addClass("bubble");
		sprite.addClass("bubble_0");
		var bubble = new Bubble(sprite);
		return bubble;



	};


	return Bubble;


})(jQuery);