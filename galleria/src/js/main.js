// Polyfills
import 'babel-polyfill'; // es6 변환을 위해 꼭 적어주어야 한다. (크롬 외 다른 브라우저 정상 작동 위해)

// 3rd-party dependencies
import $ from 'jquery';
import Swiper from 'swiper'; // npm install swiper 후 package.json에 저장된 파일을 불러온다.
import Header from './components/header';

window.jQuery = $;

(function() {
  'use strict';

  // swiper
  const swiper = new Swiper('.swiper-container', {
    onSlideChangeStart : function(swiper){
      var index = this.realIndex + 1;
      var slideSubText = $('')
      console.log(index);
      // 현재 인덱스 값 찾아서 텍스트 효과 주기
      $('.swiper-slide:eq(' + index + ')'.children('.main-visual-sub').addClass('show'));
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
})();
