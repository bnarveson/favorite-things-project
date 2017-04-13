$(function () {
    $("article").hide();
    $("h3").siblings().hide();

    $("section h2").on("click", function () {
        $("section h2").siblings().hide();
        $(this).siblings().toggle();
    });

    $("article h3").on("click", function () {
        $("h3").siblings().hide();
        $(this).siblings().toggle();
    });




});