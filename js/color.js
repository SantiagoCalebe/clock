document.addEventListener('DOMContentLoaded', () => {
  const body = document.body

  function isDayTime() {
    const hour = new Date().getHours()
    return hour >= 6 && hour < 18
  }

  function applyColors(dayMode) {
    if(dayMode) {
      body.classList.add('day')
      body.classList.remove('night')
    } else {
      body.classList.add('night')
      body.classList.remove('day')
    }
  }

  function updateColor() {
    applyColors(isDayTime())
  }

  updateColor()
  setInterval(updateColor, 1000)
})
