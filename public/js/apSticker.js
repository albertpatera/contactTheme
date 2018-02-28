$(document).scroll(function(){
    		var scroll_top = $(this).scrollTop(); // get scroll position top
    		var height_element_parent =  $(".sticker").parent().outerHeight(); //get high parent element
    		var height_element = $(".sticker").height(); //get high of elemeneto
    		var position_fixed_max = height_element_parent - height_element; // get the maximum position of the elemen
    		var position_fixed = scroll_top < 250 ? 250 - scroll_top : position_fixed_max > scroll_top ? 0 : position_fixed_max - scroll_top;
    		//$(".sticker").css("top",position_fixed);
    		$(".sticker").fadeOut(750);
    		$(".sticker").slideUp("slow");
    		$(".sticker").show();
    		$(".sticker").css("position", "fixed");
    		$(".sticker").css("margin-top", "-500px");
    		$(".sticker").fadeIn(750);

		});