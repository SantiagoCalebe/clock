const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')

function getLanguage() {
  const lang = navigator.language || navigator.userLanguage || 'en'
  return lang.split('-')[0].toLowerCase()
}

const langCode = getLanguage()
const t = translations[langCode] || translations['en']

function pad(n, z = 2) {
  return n.toString().padStart(z, '0')
}

function update() {
  const now = new Date()
  const h = pad(now.getHours())
  const m = pad(now.getMinutes())
  const s = pad(now.getSeconds())
  timeEl.textContent = `${h}:${m}:${s}`

  const day = pad(now.getDate())
  const month = t.months[now.getMonth()]
  const year = now.getFullYear()
  const weekday = t.days[now.getDay()]
  dateEl.textContent = t.formatDate(day, month, year, weekday)
}

setInterval(update, 1000)
update()
