import $ from 'jquery';

export default function options() {
  var doc = $(document);
  var win = $(window);
  var header = $('.header');
  var headerGnb = $('.header-gnb-list');
  var headerGnbItems = headerGnb.children('.header-gnb-item');
  var headerGnbExpent = $('.header-gnb-block');

  doc
    .on('click', '.header-search-layer-close', () => {
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

  win.scroll(() => {
    var top = $(document).scrollTop();

    if (top > 0) {
      header.addClass('move');
    } else {
      header.removeClass('move');
    }
  });

  //open menu gate
  const openMenu = () => {
    $('.layer-menu').addClass('active');
    closeGnb();
  };

  // close menu gate
  const closeMenu = () => {
    $('.layer-menu').removeClass('active');
  };

  // open gnb
  const openGnb = () => {
    $('.header').addClass('active');
    $('.header-gnb-block').addClass('active');
  };

  // close gnb
  const closeGnb = () => {
    $('.header').removeClass('active');
    $('.header-gnb-block').removeClass('active');
  };

  // open search
  const openSearch = () =>{
    $('.header-search-layer').addClass('active');
    closeGnb();
  };

  // close search
  const closeSearch = () =>{
    $('.header-search-layer').removeClass('active');
  };

  // open oneclick
  const openOneclick = () => {
    $('.main-oneclick__layer').addClass('active');
  };

  // close oneclick
  const closeOneclick = () => {
    $('.main-oneclick__layer').removeClass('active');
  };
}
options();
