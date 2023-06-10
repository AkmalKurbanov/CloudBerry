$(document).ready(function(){
  $('.hamburger').on('click',function(){
    $(this).toggleClass('open');
    $('body').addClass('no-scroll')
    $('.menu').addClass('open')
  });
  $('.menu__close').on('click',function(){
    $('.hamburger').removeClass('open');
    $('body').removeClass('no-scroll')
    $('.menu').removeClass('open')
  });
});



jQuery(function ($) {
  $(document).mouseup(function (e) { 
    var div = $(".menu"); 
    if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
      $('.hamburger').removeClass('open');
      $('body').removeClass('no-scroll')
      $('.menu').removeClass('open')
    }
  });
});