let userTheming = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (sessionStorage.getItem('theme')) {
  userTheming = sessionStorage.getItem('theme');
}

if (userTheming === "true") {
  $('.fa-moon').addClass('fa-sun')
  $('.fa-sun').removeClass('fa-moon')
  $('.theme-light').addClass('no-transition')
  $('.theme-light').addClass('theme-dark')
  $('.theme-dark').removeClass('theme-light')
  $('.light').addClass('dark')
  $('.dark').removeClass('light')
  setTimeout(() => {
    $('.theme-dark').removeClass('no-transition')
  }, 100);
  sessionStorage.setItem('theme', true);
} else {
  $('.fa-sun').addClass('fa-moon')
  $('.fa-moon').removeClass('fa-sun')
  $('.theme-dark').addClass('no-transition')
  $('.theme-dark').addClass('theme-light')
  $('.theme-light').removeClass('theme-dark')
  setTimeout(() => {
    $('.theme-light').removeClass('no-transition')
  }, 100);
  sessionStorage.setItem('theme', false);
}

const colorlist = [
  "#ff6348",
  "#1e90ff",
  "#ffa502",
  "#2ed573",
  "#ff4757",
  "#5352ed"
]
const mainRandColor = Math.floor(Math.random() * colorlist.length);

$(".rand-color").css("color", colorlist[mainRandColor]);
$(".rand-color-bg").css("background-color", colorlist[mainRandColor]);

$('.toggle-theme').click(function() {
  if ($(this).children().hasClass('fa-moon')) {
    sessionStorage.setItem('theme', true);
    $('.fa-moon').addClass('fa-sun')
    $('.fa-sun').removeClass('fa-moon')
    $('.theme-light').addClass('theme-dark')
    $('.theme-dark').removeClass('theme-light')
    $(this).removeClass('light')
    $(this).addClass('dark')
    userTheming = false;
  } else if ($(this).children().hasClass('fa-sun')) {
    sessionStorage.setItem('theme', false);
    $('.fa-sun').addClass('fa-moon')
    $('.fa-moon').removeClass('fa-sun')
    $('.theme-dark').addClass('theme-light')
    $('.theme-light').removeClass('theme-dark')
    $(this).removeClass('dark')
    $(this).addClass('light')
    userTheming = true;
  }
})

