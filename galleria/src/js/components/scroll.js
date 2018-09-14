import $ from 'jquery';

export default function scroll() {
  // 마우스 휠 이벤트
  $(window).on('mousewheel DOMMouseScroll', function(e) {
    e.preventDefault();

    var wheelDelta = e.originalEvent.wheelDelta,
      wheelDetail = e.originalEvent.detail;

    if (wheelDelta <= 0 || wheelDetail > 0) {
      direction('down');
    } else if (wheelDelta > 0 || wheelDetail < 0) {
      direction('up');
    }
  });

  // 스크롤 이동방향
  var listPage = $('.swiper-slide'),
    defalutCount = 0,
    scrollEvent = 0, // 스크롤 한번씩만 적용시키기 위한 변수 선언
    height = $(window).height() / 5;
  function direction(move) {
    if (move === 'down') {
      if (
        scrollEvent === 0 &&
        defalutCount < (listPage.length - 1 || defalutCount <= 0)
      ) {
        scrollEvent = 1;
        defalutCount++;

        $('body, html')
          .stop()
          .animate(
            {
              scrollTop: height * defalutCount
            },
            250,
            function() {
              scrollEvent = 0;
            }
          );
      }
    } else if (move === 'up') {
      if (scrollEvent === 0 && defalutCount) {
        scrollEvent = 1;
        defalutCount--;

        $('body, html')
          .stop()
          .animate(
            {
              scrollTop: height * defalutCount
            },
            250,
            function() {
              scrollEvent = 0;
            }
          );
      }
    }
  }

  // scoll animation
  $(window).scroll(function() {
    var windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('p').each(function() {
      var elPosition = $(this).offset().top;
      if (scrollY > elPosition - windowH) {
        $(this).addClass('text-effect');
      } else {
        $(this).removeClass('text-effect');
      }
    });

    $('span').each(function() {
      var elPosition = $(this).offset().top;
      if (scrollY > elPosition - windowH) {
        $(this).addClass('image-effect');
      } else {
        $(this).removeClass('image-effect');
      }
    });
  });
}
