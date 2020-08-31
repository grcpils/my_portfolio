$('.button--theme').click(function() {
  if ($(this).children().hasClass('fa-moon')) {
    $('.fa-moon').addClass('fa-sun')
    $('.fa-sun').removeClass('fa-moon')
    $('.theme-light').addClass('theme-dark')
    $('.theme-dark').removeClass('theme-light')
    $(this).removeClass('light')
    $(this).addClass('dark')
  } else if ($(this).children().hasClass('fa-sun')) {
    $('.fa-sun').addClass('fa-moon')
    $('.fa-moon').removeClass('fa-sun')
    $('.theme-dark').addClass('theme-light')
    $('.theme-light').removeClass('theme-dark')
    $(this).removeClass('dark')
    $(this).addClass('light')
  }
})