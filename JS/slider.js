$(document).ready(function() {
  
  $('.slider__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
  });

});