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

    var bdl = {};
    var homeHtml = "snippet/home-snippet.html"

    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHtml = html;
    };
    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        html += "<img src=image/Spinner-2s-170px.gif></div>";
        insertHtml(selector, html);
    };

    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", 
        function (event) {
            
            showLoading("#main-content");

            $ajaxUtils.sendGetRequest(
                homeHtml,
                function (responseText) {
                    document.querySelector("#main-content").innerHTML = responseText;
                },
                false);
        }
    );

    /* Lec 61 : Dynamically loading menu categories view */ 




    global.$bdl = bdl;

}) (window);