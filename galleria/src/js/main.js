'use strict';
// Polyfills
import 'babel-polyfill'; // es6 변환을 위해 꼭 적어주어야 한다. (크롬 외 다른 브라우저 정상 작동 위해)

// 3rd-party dependencies
import $ from 'jquery';
import Swiper from 'swiper'; // npm install swiper 후 package.json에 저장된 파일을 불러온다.
import Header from './components/header';
import Scroll from './components/scroll';
import AOS from 'aos';

window.jQuery = $;

(function() {
  AOS.init({
    easing: 'ease-out-back',
    duration: 1200
  });

  $('html').css('overflow', 'hidden');
  $('html, body')
    .stop()
    .animate({ scrollTop: 0 });

  const header = new Header();
  const scroll = new Scroll();

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
    centeredSlides: true,
    initialSlide: 3
  });

  // event swiper
  const eventSwiper = new Swiper('.swiper-main-event.swiper-container', {
    on: {
      init: function(){
        $('.swiper-event-main0').addClass('active');
        $('.swiper-event-sub0').addClass('active');
      },
      slideChange: function() {
        const index = this.realIndex;
        const event = '.swiper-event-main';
        const eventSub = '.swiper-event-sub';
        const current = event + index;
        const currentSub = eventSub + index;

        console.log(current);
        if ($(current)) {
          $(event).removeClass('active');
          $(current).addClass('active');
        }
        if ($(currentSub)) {
          $(eventSub).removeClass('active');
          $(currentSub).addClass('active');
        }
      }
    },
    pagination: {
      el: '.swiper-pagination-event',
      clickable: true,
      renderBullet: function(index, className) {
        var page = ['01', '02', '03'];
        return '<span class="' + className + '">' + page[index] + '</span>';
      }
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
})();
