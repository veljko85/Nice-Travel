$(document).ready( function {
    $(".destinacije").click( function(){
       $("#background").load($(this).attr("href")).hide().fadeIn();
           return(false);
  }); 

});