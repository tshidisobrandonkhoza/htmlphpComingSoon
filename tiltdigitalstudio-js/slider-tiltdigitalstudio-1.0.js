
$(document).ready(function() {
    $('#scrollDown').click(function() {
        
        $("html, body").animate({
         //   scrollTop: $("#fistlevel").offset().top
        }, 1000);
    });
    $('#scrollTop').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

});

 