// var path = document.querySelector('.hero__elem path');
// console.log(path.getTotalLength());







$(".geography__map path").each(function(i){
    var div = $(this);
    setTimeout(function(){
    div.css({
      'opacity': '1',
      'transform': 'scale(1)'
    })
    },i*50);
});