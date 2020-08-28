$(document).ready(function() {
  $('#nav-download').hide();
});

let headOffSet = $('#header-download')[0].offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > headOffSet) {
    $('#nav-download').show()
    $('#nav-download').addClass('button--nav-view');
  } else {
    $('#nav-download').removeClass('button--nav-view');
    $('#nav-download').fadeOut()
  }
};

$('.toggler').click(function() {
  if ($('.navigation__collapse').hasClass('collapsed')) {
    $('.toggler').removeClass('active');
    $('.navigation').removeClass('collapsed')
    $('.navigation__collapse').removeClass('collapsed')
  } else {
    $('.toggler').addClass('active');
    $('.navigation__collapse').addClass('collapsed')
    $('.navigation').addClass('collapsed')
  }
});

$('.menu-item').each(function() {
  $(this).click(function() {
    $('.toggler').removeClass('active');
    $('.navigation').removeClass('collapsed')
    $('.navigation__collapse').removeClass('collapsed')
  })
})