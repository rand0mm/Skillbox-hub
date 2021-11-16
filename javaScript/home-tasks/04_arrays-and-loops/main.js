// 1*
let num = []

function array (n, m, count) {
  const min = Math.min(n, m)
  const max = Math.max(n, m)
  for (let i = 0; i < count; ++i) {
    num.push(Math.floor(Math.random() * (max - min + 1) + min))
  }
  console.log(num)
  num = []
}
array(0, 100, 100)
array(2, 5, 50)
array(100, -5, 70)
array(-3, -10, 42)

// 2*
let reverse = []

function reverseStroke (stroke) {
  for (let i = stroke.length - 1; i >= 0; --i) {
    reverse.push(stroke[i])
  }
  console.log(reverse.join(''))
  reverse = []
}

reverseStroke('Привет, мир!')
reverseStroke('1')
reverseStroke('')

// 3*
let roadMines = []

function tankTrip () {
  let tankHp = 2
  for (let i = 0; i < arguments.length; i++) {
    roadMines[i] = arguments[i]
  }
  for (let i = 0; i < roadMines.length && tankHp > 0; ++i) {
    console.log(`танк переместился на ${parseInt(i) + 1}`)
    const alert = roadMines[i] ? --tankHp + tankHp > 0 ? 'танк поврежден' : 'танк уничтожен' : tankHp
    console.log(alert)
  }
  roadMines = []
}
tankTrip(true, true, true, true, true, true, true, true, true, true)
tankTrip(true, false, false, false, false, false, false, false, false, true)
tankTrip(false, false, false, true, false, false, false, false, false, false)
tankTrip(false, false, false, false, false, false, false, false, false, false)

// 4*
const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
let weekDay
function calendar (monthName, day) {
  const y = months.indexOf(monthName)
  let monthLegth
  let indexWeekDay
  switch (y) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      monthLegth = 31
      break

    case 3:
    case 5:
    case 8:
    case 10:
      monthLegth = 30
      break

    default:
      monthLegth = 28
      break
  }
  weekDay = day ? week.indexOf(day) : weekDay
  for (let i = 0; i < monthLegth; ++i) {
    indexWeekDay = i % 7 + weekDay
    indexWeekDay = indexWeekDay > 6 ? indexWeekDay - 7 : indexWeekDay
    console.log(`${parseInt(i) + 1} ${monthName}, ${week[indexWeekDay]}`)
  }
  weekDay = monthLegth % 7 + weekDay
  weekDay = weekDay > 6 ? weekDay - 7 : weekDay
}

calendar('января', 'вторник')
calendar('февраля')
calendar('марта')
calendar('июня', 'среда')
calendar('июля')
