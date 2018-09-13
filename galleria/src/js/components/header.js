import $ from 'jquery';

export default function options() {
  var doc = $(document);
  var win = $(window);
  var header = $('.header');
  var headerGnb = $('.header-gnb-list');
  var headerGnbItems = headerGnb.children('.header-gnb-item');
  var headerGnbExpent = $('.header-gnb-block');

  doc
    .on('click', '.search-layer-close', () => {
      closeSearch();
    })

    .on('click', '.main-oneclick__button', () => {
      openOneclick();
    })

    .on('click', '.oneclick-layer-close', () => {
      closeOneclick();
    });

  header
    .on('click', '.header-layer-button', () => {
      openMenu();
    })

    .on('click', '.layer-close', () => {
      closeMenu();
    })

    .on('click', '.header-search', () => {
      openSearch();
    });

  headerGnbItems.on('mouseenter', () => {
    openGnb();
  });

  headerGnbExpent.on('mouseleave', () => {
    closeGnb();
  });

  win.scroll(function() {
    var top = $(document).scrollTop();

    if (top > 0) {
      header.addClass('move');
    } else {
      header.removeClass('move');
    }
  });

  //open menu gate
  const openMenu = function() {
    $('.header-menu-layer').addClass('active');
  };

  // close menu gate
  const closeMenu = function() {
    $('.header-menu-layer').removeClass('active');
  };

  // open gnb
  const openGnb = function(){
    $('.header').addClass('active');
    $('.header-gnb-block').addClass('active');
  };

  // close gnb
  const closeGnb = function(){
    $('.header').removeClass('active');
    $('.header-gnb-block').removeClass('active');
  };

  // open search
  const openSearch = function(){
    $('.header-search-layer').addClass('active');
  };

  // close search
  const closeSearch = function(){
    $('.header-search-layer').removeClass('active');
  };

  // open oneclick
  const openOneclick = function() {
    $('.main-oneclick__layer').addClass('active');
  };

  // close oneclick
  const closeOneclick = function() {
    $('.main-oneclick__layer').removeClass('active');
  };
}
options();
