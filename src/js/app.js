/* Global js file for TNM */

jQuery(document).ready(function ($) {
  
  // ham icon toggle

  $('header .logo-wrap .ham-icon').on('click', function() {
    $(this).toggleClass('open');
    $(this).find('i').toggleClass('fa-bars fa-times');
    $('header .logo-wrap .primary-nav').toggle();
  });

  // search form toggle
  $('header .menu-right-wrap .search-icon').on('click', function() {
    $('header .menu-right-wrap .search-form-wrap').toggle();
    $(this).find('i').toggleClass('fa-search fa-times');
  });

  // video block carousel
  $('.video-block .video-wrap').slick({
    infinite: false,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Setting height of ad wrap

  setAdWrapHeight();
  $(window).on('resize', function() {
    setAdWrapHeight();
  })

  function setAdWrapHeight() {
    var slideHeight = $('.video-block .video-wrap .slick-slide').height();
    $('.video-block .video-wrap .ad-wrap').css('height', slideHeight);
  }

});