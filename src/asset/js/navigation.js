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