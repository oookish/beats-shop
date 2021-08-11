$(document).ready(function() {
  
  $('.slider__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '.arrow__left',
    nextArrow: '.arrow__right',
  });

});