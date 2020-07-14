$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('#up').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $(document).scroll(function(){

        var scroll_pos = $(window).scrollTop()
    if(scroll_pos > 10){
    
        $('#up').click(function(){
    
            $("#up").click( function() {
                $(window).scrollTop(0);
              });
    
        });
    
    }
    });
});