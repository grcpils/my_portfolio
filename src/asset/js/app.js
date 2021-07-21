let locale = "fr"

let toggler = $(".toggle-lang")

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

toggler.on("click", function(e) {
  e.preventDefault();
  if (locale == "fr") {
    rls.empty()
    std.empty()
    printStatusEn()
    toggler.attr("data-original-title", "Français")
    toggler.html("fr")
    $(".tooltip-inner").html("Français")
    $(':focus').blur()
    locale = "en"
  } else {
    rls.empty()
    std.empty()
    printStatusFr()
    toggler.attr("data-original-title", "English")
    toggler.html("en")
    $(".tooltip-inner").html("English")
    $(':focus').blur()
    locale = "fr"
  }
})