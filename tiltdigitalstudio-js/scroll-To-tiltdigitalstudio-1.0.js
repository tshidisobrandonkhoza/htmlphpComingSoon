jQuery(document).ready(function ($) {

    var navLinks = $('.onePage--nav li a');
    var navigLinks = $('.navig li a');
    var contCont = $('.main-Cont');



    var xxnav = "false";
    $('#nav-btn').click(function () {

        navBtn();

    });




    var xxnav = "false";
    function navBtn() {

        if (xxnav == "false") {
            navOutAni();
        } else {
            navInAni();
        }


    }
    function navBtnn() {


        if (xxnav == "false") {
            navInAni();
        } else {
            navInAni();
        }


    }
    function navOutAni() {
        xxnav = "true";
        $(".A--navigation").fadeIn(1000);
        $(".A--navigation").animate({
            top: "0%"
        }, 600);



        $("#nav-logo").addClass('nav-logoOn');
        $("#nav-logo").removeClass('nav-logoOff');
        setTimeout(function () {


            $(".A--navigation").animate({
                top: "0%"
            }, 1000);
            setTimeout(function () {
                $(".mainNav").animate({
                    opacity: "1"
                }, 600);
            }, 600);
        }, 400);
    }
    function navInAni() {
        xxnav = "false";

        $(".mainNav").animate({
            opacity: "0"
        }, 400);



        setTimeout(function () {

            $(".A--navigation").animate({
                top: "-100%"
            }, 800);
            setTimeout(function () {



                $("#nav-logo").removeClass('nav-logoOn');
                $("#nav-logo").addClass('nav-logoOff');
                
                

                $("#nav-logo").removeClass('nav-logoOn');
                $("#nav-logo").addClass('nav-logoOff');
                
                
                $(".A--navigation").fadeIn(1000);
                $(".A--navigation").animate({
                    top: "-100%"
                }, 600);
            }, 600);
        }, 400);
    }





    updateNavig();

    $(window).on('scroll', function () {
        updateNavig();

    });
    navigLinks.on('click', function (event) {
        event.preventDefault();
        ScrollSpeed($(this.hash));
        navBtnn();
    });
    navLinks.on('click', function (event) {
        event.preventDefault();
        ScrollSpeed($(this.hash));
        navBtnn();
    });
    function updateNavig() {

        contCont.each(function () {
            $this = $(this);
            var activeNav = $('.onePage--nav li a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            var activeHead = $('.navig li a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navLinks.eq(activeNav).addClass('nav-on');
                navLinks.eq(activeNav).removeClass('nav-off');
                navigLinks.eq(activeHead).addClass('navig-on');
                navigLinks.eq(activeHead).removeClass('navig-off');
            } else {
                navLinks.eq(activeNav).removeClass('nav-on');
                navLinks.eq(activeNav).addClass('nav-off');
                navigLinks.eq(activeHead).removeClass('navig-on');
                navigLinks.eq(activeHead).addClass('navig-off');
            }
        });
    }
    function ScrollSpeed(target) {
        $('body,html').animate({'scrollTop': target.offset().top}, 600);
    }
});

