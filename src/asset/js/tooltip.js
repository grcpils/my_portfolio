$(document).ready(function(){
  $('.custom-tooltip-color-rand')
  .tooltip()
  .each(function() {
    $(this).hover(function(){
      var aria = $(this).attr('aria-describedby');
      $('#' + aria).find('.arrow').css({
        "display": "none"
      });
      $('#' + aria).find('.tooltip-inner').css("color", colorlist[mainRandColor + 1]);
    });
  });
  $('.custom-tooltip')
  .tooltip()
  .each(function() {
    $(this).hover(function(){
      var aria = $(this).attr('aria-describedby');
      $('#' + aria).find('.arrow').css({
        "display": "none"
      });
    });
  });
});