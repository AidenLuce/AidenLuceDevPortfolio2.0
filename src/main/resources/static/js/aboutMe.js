$(function () {
    $(".hover").hover(function(){
        $(".speech-bubble").css(
            "opacity", "100")
    }, function (){
        $(".speech-bubble").css("opacity", "0")
    })
})