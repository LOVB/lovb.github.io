$(function(){
    $(window).resize(function(){
        if ($(window).width() <= 768){
            $(".contacto").show();
        } else {
            $(".contacto").hide();
        }
    });

    $(".contacto").hide();
    $(".boton").click(function(){
        $('.contacto').fadeToggle();
    });

});
