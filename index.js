const schemeOptions = document.getElementById('color-scheme')
const colorSwatches = document.querySelectorAll('.color')
const btn = document.getElementById('color-btn')
const colorInput = document.getElementById('color-choice')

let selectedColor = colorInput.value.replace('#', '')

colorInput.addEventListener('input', () => {
  selectedColor = colorInput.value.replace('#', '')
})

btn.addEventListener('click', () => {
  const mode = schemeOptions.value
  fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
      colorSwatches.forEach((swatch, i) => {
        swatch.style.background = data.colors[i].hex.value
        swatch.setAttribute('data-hex', data.colors[i].hex.value)
      })
    })
    .catch(err => console.error('Failed to fetch color scheme:', err))
})

// Click any swatch to copy its hex value
colorSwatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    const hex = swatch.getAttribute('data-hex')
    if (!hex) return
    navigator.clipboard.writeText(hex).then(() => {
      const original = swatch.style.background
      swatch.style.outline = '3px solid white'
      setTimeout(() => { swatch.style.outline = 'none' }, 1000)
    })
  })
})
