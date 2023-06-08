function startCounter() {
  $('.about__count-item span').each(function (index) {
    var size = $(this).text().split(
    )[1] ? $(this).text().split(
    )[1].length : 0; $(this).prop('Counter', 0).animate({ Counter: $(this).text() }, { duration: 2000, easing: 'swing', step: function (now) { $(this).text(parseFloat(now).toFixed(size)); } });
  });
} startCounter();

