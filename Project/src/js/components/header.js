// 3rd-party dependencies
import $ from 'jquery';

// const defaults = {
//   rootSelector: '.header',
//   activeClass: 'active'
// };


// export default class Header {
//   constructor(options) {
//     const settings = Object.assign({}, defaults, options);
//     const rootElement = document.querySelector(settings.rootSelector);

//     Object.assign(this, { settings, rootElement });
//   }

//   open() {
//     const { rootElement, settings } = this;
//     rootElement.classList.add(settings.activeClass);
//   }

//   close() {
//     const { rootElement, settings } = this;
//     $(rootElement).removeClass(settings.activeClass);
//   }

//   toggle() {
//     const { rootElement, settings } = this;

//     if ($(rootElement).hasClass(settings.activeClass)) {
//       $(rootElement).removeClass(settings.activeClass);
//     } else {
//       $(rootElement).addClass(settings.activeClass);
//     }
//   }
// }

// import 해주기 위해 export 해준다.
export default function options() {
  var btnNavOpen = $('.header__layer-button'),
    dimd = $('.dimd'),
    NavLayer = $('.side-navigation');

  // open
  const open = function(){
    btnNavOpen.on('click', function(e) {
      NavLayer.addClass('is-active');
      dimd
        .addClass('is-open')
        .stop()
        .animate({
            opacity: 0.6
          },
          300
        );
    });
  }
  open();

  // close
  const close = function(){
    var btnNavClose = $('.button-navigation-close');
    btnNavClose.on('click', function(e) {
      NavLayer.removeClass('is-active');
      dimd.stop().animate({
          opacity: 0
        },
        300,
        function(){
          dimd.removeClass('is-open');
        }
      );
    });
  };
  close();

  // dimd close
  const dimdClose = function() {
    dimd.on('click', function(){
      NavLayer.removeClass('is-active');
      dimd.stop().animate({
          opacity: 0
        },
        300,
        function(){
          dimd.removeClass('is-open');
        }
      );
    });
  }
  dimdClose();
}
options();
