$('.project-card').each(function() {
  var imgUrl = this.dataset['img']
  this.style.backgroundImage = 'url(' + imgUrl + ')'
})