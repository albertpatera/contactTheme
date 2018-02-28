

var getAnimation = function () {
	$("fieldset").mouseover(function() {
  		$("fieldset").fadeOut(750);
  		$("fieldset").css("background-color", "black");
  		$("fieldset").css("opacity", "0.9");
  		$("fieldset").fadeIn(750);

})

}

setTimeout(function(){ 
	get }, 3000);