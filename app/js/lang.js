$('.lang__item_ru').on('click', function() {
  $('.lang__item_ru').addClass('lang__item_active')
  $('.lang__item_en').removeClass('lang__item_active')
})

$('.lang__item_en').on('click', function() {
  $('.lang__item_en').addClass('lang__item_active')
  $('.lang__item_ru').removeClass('lang__item_active')
})

$('.lang__item_active').on('click', function(e) {
  e.preventDefault()
})