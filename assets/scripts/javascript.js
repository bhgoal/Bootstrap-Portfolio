$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.img-thumbnail').hover(
        function(){
            $(this).find('.imgCaption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.imgCaption').slideUp(250); //.fadeOut(205)
        }
    ); 
});