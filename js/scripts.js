/*!
    * Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
    $(document).ready(function(){
      $(".formopengeneral").click(function(){
        window.open("https://forms.gle/Lc3ByWGvsvuxsadD6");
        console.log("opened form")
      });
    });
    $(document).ready(function(){
      $(".formopenclub").click(function(){
        window.open("https://forms.gle/GJdgz8MUpp47J3qL7");
        console.log("opened form")
      });
    });
    $(document).ready(function(){
      $(".join").click(function(){
        window.open("https://www.notion.so/Join-Connect-Cal-51e75a4da73042fda61b2e6b9fd3ad6b");
        console.log("opened form")
      });
    });
    $(document).ready(function(){
      $(".resourcebutton").click(function(){
        window.location.href = "mailto:resources@connected.berkeley.edu"
        console.log("opened form")
      });
    });
    $(document).ready(function(){
      $(".partnerbutton").click(function(){
        window.location.href = "https://forms.gle/mMvsWPzYiK7oJMLb9"
        console.log("opened form")
      });
    });
   
    
  })(jQuery); // End of use strict
  