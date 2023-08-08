/* 59-Fixing mobile nav menu atomatically collapsed */
$(function () {
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth <= 992) {
            $("#navbarContent").collapse('hide');
        }
    });
});

(function (global) { /* IIFE : immediately invoked function exp */

    var bdal = {};
    // var homeHtml = "snippet/home-snippet.html"
    var publicationUrl = "BDAlab_publications.json";
    var publicationHtml = "publication.html";

    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHtml = html;
    };
    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        html += "<img src=image/Spinner-2s-170px.gif></div>";
        insertHtml(selector, html);
    };

    // Return substitute of "{{propName}}" with propValue in given "string"
    var insertProperty = function (string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    }
    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", 
        function (event) {
            
            showLoading("#main-content");

            /*
            $ajaxUtils.sendGetRequest(
                homeHtml,
                function (responseText) {
                    document.querySelector("#main-content").innerHTML = responseText;
                },
                false);
            */
        }
    );

    bdal.loadPublication = function () {
        $ajaxUtils.sendGetRequest(publicationUrl, buildAndShow);
    };
    function buildAndShow (categories) {
        $ajaxUtils.sendGetRequest(
            publicationHtml,
            function (publicationHtml) {
                var publicationViewHtml = buildPublicationViewHtml (
                    categories, publicationHtml);
                    insertHtml("#insert-content", publicationViewHtml);
            },
            false
        );
    }
    function buildPublicationViewHtml (categories, publicationHtml) {
        
        for (var i=0; i<categories.length; i++) {
            var html = publicationHtml;

            var num = categories[i].Number;
            var year = categories[i].Year;
            var journal = categories[i].Journal;
            var title = categories[i].Title;

            html = insertProperty(html, "Number", num);
            html = insertProperty(html, "Year", year);
            html = insertProperty(html, "Journal", journal);
            html = insertProperty(html, "Title", title);

        }
    }

    global.$bdal = bdal;

}) (window);