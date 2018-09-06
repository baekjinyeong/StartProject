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
  var header = $('.header');
  var doc = $(document);
  var win = $(window);
  var headerContainer = header.find('.header__block');
  var navContainer = $('.side-navigation');
  var dimd = $('.dimd');

  header
    .on('click', '.header-layer-button', () => {
      open();
    })
    .on('click', '.header-search-button', () => {
      
    });

  doc
    .on('click', '.button-navigation-close', () => {
      close();
    })
    .on('click', '.dimd', () => {
      dimdClose();
    });

  // scroll header
  win.scroll(function() {
    var top = $(document).scrollTop();

    if (top > 0) {
      headerContainer.addClass('is-active');
    } else {
      headerContainer.removeClass('is-active');
    }
  });

  // open
  const open = function() {
    navContainer.addClass('is-active');
    dimd
      .addClass('is-open')
      .stop()
      .animate({
          opacity: 0.6
        },
        300
      );
  };

  // close
  const close = function(){
    navContainer.removeClass('is-active');
    dimd.stop().animate({
        opacity: 0
      },
      300,
      function(){
        dimd.removeClass('is-open');
      }
    );
  };

  // dimd close
  const dimdClose = function() {
    navContainer.removeClass('is-active');
    dimd.stop().animate({
        opacity: 0
      },
      300,
      function(){
        dimd.removeClass('is-open');
      }
    );
  };

  // toggle header
  const overHeader = function(){
    headerContainer.on('mouseenter', function(){
      headerContainer.addClass('is-active');
      $('.header-navigation-block').addClass('is-active');
    });
    headerContainer.on('mouseleave', function(){
      headerContainer.removeClass('is-active');
      $('.header-navigation-block').removeClass('is-active');
    });
  };
  overHeader();
}
options();
