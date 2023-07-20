$(function () {








    $(".pfp").hover(function (){
        $(this).css("height", "110%");
        $(".speech-bubble").css("opacity", "100")
    }, function (){
        $(this).css("height", "100%");
        $(".speech-bubble").css("opacity", "0",)
    });


})