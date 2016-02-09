$(function(){

    $(".contacto").hide();

    $(window).resize(function(){
        if ($(window).width() <= 768){
            $(".contacto").show();
        } else {
            $(".contacto").hide();
        }
    });

    $(".boton").click(function(){
        $('.contacto').fadeToggle();
    });
});
