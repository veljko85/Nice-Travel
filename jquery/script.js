$(document).ready(function(){
	
	//aside aktuelno

	$(".akt h1").animate({"margin-left": "25%"}, 500);
	$(".prvo").delay(500).animate({"margin-left": "10%"}, 500);
	$(".drugo").delay(800).animate({"margin-left": "10%"}, 500);
	$(".trece").delay(1100).animate({"margin-left": "10%"}, 500);

	//aside lst minute

	$(".last h1").animate({"margin-left": "55%"}, 500);
	$(".prva").delay(500).animate({"margin-left": "45%"}, 500);
	$(".druga").delay(800).animate({"margin-left": "45%"}, 500);
	$(".treca").delay(1100).animate({"margin-left": "45%"}, 500); 

	//reklame na sredini

	$(".first").delay(100).fadeIn();
	$(".second").delay(300).fadeIn();
	$(".third").delay(500).fadeIn();
	$(".fourth").delay(700).fadeIn();
	$(".fifth").delay(900).fadeIn();
	$(".sixth").delay(1100).fadeIn();

	// navigacija

	$(".ham-men").on("click", function(){
    	$(".ham-btn").toggle()
    	$(".ham-cro").toggle();	
    	$(".nav").slideToggle();
    });
	$(".lista").click( function(){
		$(".reklame").hide();
    	$(".active").hide();
	    $(".unactive").show();
	    $(this).children(".unactive").hide();
	    $(this).children(".active").show();
	    $("#background").show();
	    $(".loading").show();
	    $(".loading").delay(1000).fadeOut();
	    $(".wrap").load($(this).attr("href")).hide().fadeIn();
        	return(false);
	    
		
    });
    
	
    // Blinking
    
    setInterval(function(){
    	$(".akt h1, .last h1, .kon-info, .rekl").toggleClass("blink"); }, 500);


});