var headerHeight = $('#header').outerHeight();

$(window).scroll(function () {
  var sticky = $('.header-sticky'),
    scroll = $(window).scrollTop();
  if (scroll >= headerHeight) {
    sticky.addClass('sticky-on');
  }
  else sticky.removeClass('sticky-on');
});