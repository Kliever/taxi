$(function(){
  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

  wow = new WOW(
    {
      mobile: false,
    }
  )
  wow.init();

});