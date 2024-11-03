$(document).ready(function () {});
window.addEventListener("load", tiltLoad);
$(window).scroll(function (event) {didScroll = true;});

function tiltLoad() {
    var iload = document.getElementById("tilt_load");

    function load_timer() {
        var loadA = document.getElementsByClassName("tilt_loadA");
        var loadB = document.getElementsByClassName("tilt_loadB");


        $(loadA).animate({
            'top': '100%'
        });
     
        setTimeout(function mainLoad() {
   $('.m--box').animate({
            'opacity': '0'
        });
            $(loadB).animate({
                'top': '100%'
            });

            //document.body.removeChild(loadA);

            setTimeout(function loading_sc()
            {
                setTimeout(function mainLoad() {
//                    $(iload).delay(400).animate({
//                        'top': '-100%' 
//                    });

                    $(iload).animate({
                        'opacity': '0'
                    });
                    setTimeout(function loading_sc()
                    {
                        document.body.removeChild(iload);
                    }, 800);
                }, 1000);

            }, 400);
        }, 600);
    }


//    setTimeout(function () {
        setTimeout(load_timer, 1000);
//    }, 10000);
}

