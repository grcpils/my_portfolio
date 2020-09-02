var d = document

// 439.82 - (439.82 * percent) / 100;

$('.progressbar.circle').each(function() {
  var svg = d.createElementNS('http://www.w3.org/2000/svg', 'svg')
  var circleA = d.createElementNS('http://www.w3.org/2000/svg', 'circle')
  var circleB = d.createElementNS('http://www.w3.org/2000/svg', 'circle')
  var percent_text = d.createElement('span')
  var value = this.dataset['value']
  percent_text.classList.add('circle-label')
  percent_text.textContent = value + '%'
  circleA.setAttribute('cx',70);
	circleA.setAttribute('cy',70);
  circleA.setAttribute('r',70);
  circleB.setAttribute('cx',70);
	circleB.setAttribute('cy',70);
  circleB.setAttribute('r',70);
  circleB.style.strokeDashoffset = 439.82 - (439.82 * value) / 100
  this.appendChild(svg)
  this.append(percent_text)
  this.children[0].appendChild(circleA)
  this.children[0].appendChild(circleB)
})

$('.progressbar.line').each(function() {
  var value = this.dataset['value']
  
})