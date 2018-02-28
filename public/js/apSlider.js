
var $text = "Pro-Plant .s.r.o.";
var $describtion = "Výroba a prodej růží...";
var $detail = "<h6>Internetový prodej okrasných rostlin, německých růží, anglických růží Austin Roses a Harkness. Květy jsou určené zejména k řezu do vázy. Kompaktní relativně nízké keře dávají množství výhonů na kterém bývá jeden překrásný velký květ.</h6>";
$(".row").mouseover(function() {
	$(".row").css("background-color", "#000")
	$(".row").css("opacity", "0.9");
	$("img").css("opacity", "1");
	$(".row").css("position", "relative");


	$(".sliderTitle").html("<h3>"+ $text + "</h3><i>" + "<p>"+ $describtion + "</p></i><p>" + $detail +"</p>");
	//$(".row").fadeOut(750);
	$(".sliderTitle").css("font-size", "35px");
	$(".sliderTitle").css("color", "#fff");
	$(".sliderTitle").css("position", "absolute");
	$(".sliderTitle").css("margin-left", "25%");
	//$(".row").fadeIn(750);
	$(".close").html("<span id='close' class='fa fa-times' style='color: #fff; font-size: 50px; float: right; color: red'></span>");
	$(".row").css("width", "750px");
	$(".row").css("height", "350px");
	$(".sliderTitle").show()
	$("img").hide(100);
	$("body, html").css("background-color", "#000");
	$("body, html").css("opacity", "0.5");
	$(".row").css("opacity", "1");
	$(".row").css("display", "block");
	//$(".row").slideUp(750);
	$(".row").fadeIn(750);
	$(".row").show();
	$(".row").css("margin-left", "50%");
	$(".row").css("height", "500px");
	$(".row").css("width", "750px");
	$(".row").css("box-shadow", "4px 3px 20px 6px  #AAA");
	$(".row").css("padding", "52px");
	$("img").show();
	$("img").css("width", "25%");
	


})

$(".close").mouseclick(function() {
	$("body, html").css("opacity", "1");
	$(".row").hide();
	$(".row").show();
	$("img").show();
	$(".row").css("display", "none");	
})




