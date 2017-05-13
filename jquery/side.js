$(document).ready(function()	{

    	$(".destinacije").click( function(){
    		$(".loading").show();
	    	$(".loading").delay(1000).fadeOut();
        	$(".wrap").load($(this).attr("href")).hide().fadeIn();
            	return(false);

    }); 
}); 