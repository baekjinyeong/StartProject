// Polyfills
import 'babel-polyfill'; // es6 변환을 위해 꼭 적어주어야 한다. (크롬 외 다른 브라우저 정상 작동 위해)

// 3rd-party dependencies
import $ from 'jquery';
import Swiper from 'swiper'; // npm install swiper 후 package.json에 저장된 파일을 불러온다.

window.$ = $;
window.jQuery = $;

(function() {
  'use strict';

  // swiper
  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
      clickable: true
    },
    autoplay: {
      delay: 3000
    }
  });
})();
