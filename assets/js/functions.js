jQuery(document).ready(function($) {

  setTimeout(function() {
    $('#mce-error-response').fadeOut('fast');
    $('#mce-success-response').fadeOut('fast');
  }, 10000); // <-- time in milliseconds
  
  // Hamburger button
  $('.ham').on('click', function() {
    $('.menu').toggleClass("menuh");
    $('.line').toggleClass("linex");
  });


	$(".busqueda").mouseenter(function(){
    $(".busqueda p").slideUp(200);
    $(".busqueda form input").slideDown(200);
  });

  $(".busqueda form").mouseleave(function(){
    $(".busqueda p").slideDown(200);
    $(".busqueda form input").slideUp(200);
  });

  $(".siguenos").mouseenter(function(){
    $(".siguenos .redes").slideDown(200);
    $(".siguenos p").slideUp(200);
  });

  $(".siguenos").mouseleave(function(){
    $(".siguenos .redes").slideUp(200);
    $(".siguenos p").slideDown(200);
  });





  $('.x').on('click', function(){
    $('.play').fadeIn(300);
    $('.img').fadeIn(300);
    $('.video iframe').remove();

    $('.gradient .top').fadeIn(300);
    $('.gradient .bottom').fadeIn(300);
    $('.text .menu').css('top', '0');
    $('.text .bottom').show(400);
    $('.x').fadeOut(500);
  });

  $('.x svg').on('click', function(){
    $('.play').fadeIn(300);
    $('.img').fadeIn(300);
    $('.video iframe').remove();

    $('.gradient .top').fadeIn(300);
    $('.gradient .bottom').fadeIn(300);
    $('.text .menu').css('top', '0');
    $('.text .bottom').show(400);
    $('.x').fadeOut(500);
  });



});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  var he = $(window).height();

  if (scroll >= 100) {
    $(".video-top").addClass("scroll");
    $(".overlaymenu").slideDown(400);
    $('.text .menu').css('top', '0');
    $('.text .bottom').show(400);
  } else {
      $(".video-top").removeClass("scroll");
      $(".overlaymenu").slideUp(400);
  }
});


if ($(window).width() < 680) {
  $(".overlaymenu").remove();
  $(".video-top").removeClass("scroll");
}


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('section#footer').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('section#footer').css("bottom", "-130px");
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
           $('section#footer').css("bottom", "0");
        }
    }
    
    lastScrollTop = st;
}

