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
  });
});