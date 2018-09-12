'use strict';
// Polyfills
import 'babel-polyfill'; // es6 변환을 위해 꼭 적어주어야 한다. (크롬 외 다른 브라우저 정상 작동 위해)

// 3rd-party dependencies
import $ from 'jquery';
import Swiper from 'swiper'; // npm install swiper 후 package.json에 저장된 파일을 불러온다.
import Header from './components/header';

window.jQuery = $;

(function() {
  const header = new Header();

  // main visual swiper
  const mainSwiper = new Swiper('.swiper-main-visual.swiper-container', {
    on: {
      slideChange: function(swiper) {
        const index = this.realIndex;
        const slideText = '.main-visual-sub';
        const current = slideText + index;

        if ($(current)) {
          $(slideText).removeClass('show');
          $(current).addClass('show');
        }
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    speed: 1000,
    loop: true,
    parallax: true
  });

  // oneclick swiper
  const oneclickSwiper = new Swiper('.swiper-oneclick-layer.swiper-container', {
    on: {
      init: function(){
        $('.slide-img-button0').addClass('show');
      },
      slideChange: function(swiper) {
        const index = this.realIndex;
        const slideText = '.slide-img-button';
        const current = slideText + index;

        console.log(current);
        if ($(current)) {
          $(slideText).removeClass('show');
          $(current).addClass('show');
        }
      }
    },
    slidesPerView: 3,
    spaceBetween: 300,
    centeredSlides: true
  });
})();
