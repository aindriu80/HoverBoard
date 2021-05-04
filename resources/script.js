const container = document.getElementById('container')
const colours = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const squares = 600

for (let index = 0; index < squares; index++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

function setColor(element) {
  const colour = getRandomColor()
  element.style.background = colour
  element.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`
  console.log(colour)
}

function removeColor(element) {
  console.log('out', element)
  element.style.background = '#1d1d1d'
  element.style.boxShadow = ' 0 0 2px #000'
}

function getRandomColor() {
  return colours[Math.floor(Math.random() * colours.length)]
}
