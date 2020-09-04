$('.project-card').each(function() {
  var imgUrl = this.dataset['img']
  console.log(imgUrl)
  this.style.backgroundImage = 'url(' + imgUrl + ')'
})