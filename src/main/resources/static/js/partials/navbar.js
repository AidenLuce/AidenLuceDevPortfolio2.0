$(function (){
    $(".logo").hover(function (){
        $(this).addClass("golden-text").css("border-color", "#634f2c")
    }, function (){
        $(this).removeClass("golden-text").css("border-color", "var(--gold)", "box-sizing", "border-box")
    })
})
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}