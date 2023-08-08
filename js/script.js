
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
        }
    );
    
    global.$bdal = bdal;

}) (window);