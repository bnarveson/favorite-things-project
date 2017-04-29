$(function () {

    //toggle functionality.
    //$("article").hide();
    //$("h3").siblings().hide();

    //$("section h2").on("click", function () {
    //    $("section h2").siblings().hide();
    //    $(this).siblings().toggle();
    //});

    //$("article h3").on("click", function () {
    // $("h3").siblings().hide();
    //   $(this).siblings().toggle();
    // });

    //Display JSON data
    getGamesHtml = function (Games) {
        html = "";
        html += "<li><h3>" + Games.title + "</h3><p>" + Games.info + "<img src=" + Games.image + "</p></li>";

        return html;
    };


    getTVHtml = function (TV) {
        html = "";
        html += "<li><h3>" + TV.title + "</h3><p>" + TV.info + "<img src=" + TV.image + "</p></li>";

        return html;
    };


    displayGames = function (target, gamesArray) {
        html = "";
        html += "<ul>";

        $.each(gamesArray, function (index) {
            Games = gamesArray[index];
            html += getGamesHtml(Games);
        });
        html += "</ul>";

        $(target).append(html);
    };


    displayTV = function (target, TVArray) {
        html = "";
        html += "<ul>";

        $.each(TVArray, function (index) {
            TV = TVArray[index];
            html += getTVHtml(TV);
        });
        html += "</ul>";

        $(target).append(html);
    };




    // Get JSON data
    $.getJSON("things.json", function (things) {
        console.log(things);
        displayGames("#GameList", things.Games);
        displayTV("#ShowList", things.TV);

    });



    $('#GameList h3').click(function (e) {

        e.preventDefault();
        $this = $(this).parent().find('p');
        $("#GameList p").not($this).hide();


        $this.toggle();

    });

    $('#ShowList h3').click(function (e) {

        e.preventDefault();
        $this = $(this).parent().find('p');
        $("#ShowList p").not($this).hide();


        $this.toggle();



    });






});