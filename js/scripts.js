/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // Toggle dark mode
    $(document).ready(function(){
        $("#dark-mode").click(function(){ 
            if($("#dark-mode").html() == "Dark Mode"){
                $("#dark-mode").html("Light Mode");
                $(".container-fluid").toggleClass("dark-mode").toggleClass("light-mode");
                $("nav").toggleClass("dark-mode").toggleClass("light-mode");
                $("#favicon").attr("href","assets/img/favicon-dark.ico");
            }
            else {
                $("#dark-mode").html("Dark Mode");
                $(".container-fluid").toggleClass("light-mode").toggleClass("dark-mode");
                $("nav").toggleClass("light-mode").toggleClass("dark-mode");
                $("#favicon").attr("href","assets/img/favicon-light.ico");
            }
        });
      });
})(jQuery); // End of use strict
