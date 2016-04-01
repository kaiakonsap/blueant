$( document ).ready(function() {
      jQuery('#navbar-toggle').click(function (event) {
        event.preventDefault();
        if(jQuery( window ).width()<=1200){
            if(!jQuery('nav').is(':visible')) {
                jQuery('nav').slideDown('fast');
            } else {
                jQuery('nav').slideUp('fast');
            }}
        else{
            jQuery('nav').css('display','block');
        }
    });

jQuery(window).resize(function() {
  
    if(jQuery(window).width()>1200){
         jQuery('nav').css('display','block');

    }

});

})