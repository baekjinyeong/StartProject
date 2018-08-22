// Polyfills
import 'babel-polyfill';

// 3rd-party dependencies
import $ from 'jquery';
import Swiper from 'swiper';

window.$ = $;
window.jQuery = $;

(function() {
  'use strict';

  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
    autoplay: {
      delay: 3000
    }
  });
})();
