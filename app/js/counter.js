// function startCounter() {
//   $('.about__count-item span').each(function (index) {
//     var size = $(this).text().split(
//     )[1] ? $(this).text().split(
//     )[1].length : 0; $(this).prop('Counter', 0).animate({ Counter: $(this).text() }, { duration: 2000, easing: 'swing', step: function (now) { $(this).text(parseFloat(now).toFixed(size)); } });
//   });
// } startCounter();



var a = 0;
$(window).on('scroll', function () {
  var oTop = $('.about__count-list').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-number');
      $({
        countNum: $this.text()
      }).animate(
        {
          countNum: countTo
        },

        {
          duration: 850,
          easing: 'swing',
          step: function () {
            $this.text(
              Math.ceil(this.countNum).toLocaleString('en')
            );
          },
          complete: function () {
            $this.text(
              Math.ceil(this.countNum).toLocaleString('en')
            );
          }
        }
      );
    });
    a = 1;
  }
});





