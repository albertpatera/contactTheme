
var $text = "Pro-Plant .s.r.o.";
var $describtion = "Výroba a prodej růží...";
var $map = '<iframe src="https://api.mapy.cz/frame?params=%7B%22x%22%3A14.730617625672734%2C%22y%22%3A50.30303572472817%2C%22base%22%3A%221%22%2C%22layers%22%3A%5B%5D%2C%22zoom%22%3A18%2C%22url%22%3A%22https%3A%2F%2Fmapy.cz%2Fs%2F2qPT3%22%2C%22mark%22%3A%7B%22x%22%3A%2214.730617625672734%22%2C%22y%22%3A%2250.30303572472817%22%2C%22title%22%3A%22Sliv%C3%ADnko%2011%2C%20Doln%C3%AD%20Slivno%22%7D%2C%22overview%22%3Atrue%7D&amp;width=400&amp;height=140&amp;lang=cs" width="430" height="250" style="border:none" frameBorder="0"></iframe>';
$(".row").mouseover(function() {
	$(".row").css("background-color", "#000")
	$(".row").css("opacity", "0.9");
	$("img").css("opacity", "1");
	$(".row").css("position", "relative");


	$(".sliderTitle").html("<h3>"+ $text + "</h3><i>" + "<p>"+ $openTime + "</p></i><p>" + $map +"</p>");
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
	$("body").css("opacity", "0.5");
	$(".row").css("opacity", "1");
	$(".row").css("display", "block");
	//$(".row").slideUp(750);
	$(".row").fadeIn(750);
	$(".row").show();
	$(".row").css("margin-left", "50%");
	$(".row").css("height", "500px");
	$(".row").css("width", "750px");
	//$(".row").css("box-shadow", "4px 3px 20px 6px  #AAA");
	$(".row").css("padding", "52px");
	$("img").show();
	$("img").css("width", "25%");
	$("table").hide();
	$(".row").css("background-color", "#fff");
	
	$(".row").show();
	$("h3").css("color", "green");
	$(".row").css("background-color", "white");



})

$(".close").mouseclick(function() {
	$("body, html").css("opacity", "1");
	$(".row").hide();
	$(".row").show();
	$("img").show();

})




