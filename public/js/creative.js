(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 70
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Scroll reveal calls
  window.sr = ScrollReveal({ duration: 1000,
                             reset: true });
  sr.reveal('#album-wrapper div', 250);
  sr.reveal('#media iframe', 100);
  sr.reveal('.card', 100);
  sr.reveal('.sr-contact');

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
  
  // Fix wesley's bio height not being same as others
  var wesley_height = $("#wesley p:nth-child(1)").height();
  var phill_height = $("#phill p:nth-child(1)").height();
  if (window.matchMedia("(min-width: 768px)").matches) {
    /* the viewport is at least 768 pixels wide */
      if(wesley_height < phill_height) {
      $("#wesley p:nth-child(1)").height(phill_height);
    }
  } 


  function click_read_more(member) {
    $(member + " p").removeClass("hidden");
    $(member + " .read-more").addClass("hidden");
    // Readjust Wesley text height
    // if(member === "#wesley") {
    //   $("#wesley p:nth-child(1)").height(wesley_height);
    // }
    $(member + " .read-less").removeClass("hidden");
  }
  
  $("#wesley .read-more").click(function() {
    click_read_more("#wesley");
  });
  $("#phill .read-more").click(function() {
    click_read_more("#phill");
  });
  $("#jihoon .read-more").click(function() {
    click_read_more("#jihoon");
  });
  
  function click_read_less(member) {
    $(member + " p:last-of-type").addClass("hidden");
    $(member + " .read-more").removeClass("hidden");
    // if(member === "#wesley") {
    //   $("#wesley p:nth-child(1)").height(phill_height);
    // }
    $(member + " .read-less").addClass("hidden");
  }
  
  $("#wesley .read-less").click(function() {
    click_read_less("#wesley");
  });
  $("#phill .read-less").click(function() {
    click_read_less("#phill");
  });
  $("#jihoon .read-less").click(function() {
    click_read_less("#jihoon");
  });
  
})(jQuery); // End of use strict
