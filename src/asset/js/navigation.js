$(document).ready(function() {
  // $('#nav-download').hide();
});

$(window).on("scroll", function() {
  if (window.pageYOffset > $('#header-download').position().top) {
    $('.logo').addClass('minus');
    $('#nav-download').addClass('button--nav-view');
  } else {
    $('#nav-download').removeClass('button--nav-view');
    $('.logo').removeClass('minus');
  }
});

$('.toggler').click(function() {
  if ($('.navigation__collapse').hasClass('collapsed')) {
    $('.toggler').removeClass('active');
    $('.navigation').removeClass('collapsed')
    $('.navigation__collapse').removeClass('collapsed')
    $('body').removeClass('overflow-hidden')
    $('.mobile-wrapper').removeClass('overflow-hidden')
  } else {
    $('.toggler').addClass('active');
    $('.navigation__collapse').addClass('collapsed')
    $('.navigation').addClass('collapsed')
    $('body').addClass('overflow-hidden')
    $('.mobile-wrapper').addClass('overflow-hidden')
  }
});

$('.menu-item').each(function() {
  $(this).click(function() {
    $('.toggler').removeClass('active');
    $('.navigation').removeClass('collapsed')
    $('.navigation__collapse').removeClass('collapsed')
    $('body').removeClass('overflow-hidden')
    $('.mobile-wrapper').removeClass('overflow-hidden')
  })
})