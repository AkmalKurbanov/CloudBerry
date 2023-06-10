function scrollToSection(event) {
  event.preventDefault();
  var section = $($(this).attr('href'));
  $('html, body').animate({
    scrollTop: section.offset().top - 90
  }, 700);
}
$('[data-scroll]').on('click', scrollToSection);


$('[data-scroll]').on('click', function () {
  setTimeout(function () {
    $('.menu').removeClass('open');
    $('body').removeClass('no-scroll');
    $('.hamburger').removeClass('open');
  }, 900);
});