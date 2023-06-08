$('.lang__item').on('click', function() {
  $(this).addClass('lang__item_active')
  $('.lang__item').not(this).removeClass('lang__item_active')
})