import $ from 'jquery';

export default function scroll() {
  // scoll animation
  $(window).scroll(function() {
    var windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.event p').each(function() {
      var elPosition = $(this).offset().top;
      if (scrollY > elPosition - windowH) {
        $(this).addClass('text-effect');
      } else {
        $(this).removeClass('text-effect');
      }
    });

    $('.event span').each(function() {
      var elPosition = $(this).offset().top;
      if (scrollY > elPosition - windowH) {
        $(this).addClass('image-effect');
      } else {
        $(this).removeClass('image-effect');
      }
    });
  });
}
