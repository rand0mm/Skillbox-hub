/* eslint-disable import/extensions */
import render from './product-list.js'

const appContainer = document.getElementById('app')
const title = document.getElementById('title')

// создание оповещение об ошибке
function createEror (message) {
  const errorAlert = document.createElement('li')
  const errorMessage = document.createElement('div')
  const errorAlerts = document.getElementById('error-alerts')

  errorAlert.classList.add('list-group-item', 'border-0', 'bg-transparent')
  errorMessage.classList.add('alert', 'alert-danger')

  errorMessage.textContent = message

  errorAlert.append(errorMessage)
  errorAlerts.append(errorAlert)

  setTimeout(() => errorAlert.remove(), 3000)
}

// задержка
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// повторная отправка запроса
const requestRetry = async (url, n) => {
  try {
    const res = await fetch(url)

    if (n <= 1) {
      createEror('Произошла ошибка, попробуйте обновить страницу позже')
      return res
    }
    if (res.status === 500) throw new Error('Сервер не отвечает')
    if (res.status === 404) return res
    return res
  } catch (e) {
    if (n <= 1) return null
    await sleep(250)
    const j = n - 1
    const b = await requestRetry(url, j)
    return b
  }
}

// получение данных с сервера
async function loadResource (src) {
  const spinner = document.getElementById('load-spinner')

  spinner.classList.remove('d-none')

  const resp = await requestRetry(src, 3)
  if (resp === null) {
    createEror('Произошла ошибка, проверьте подключение к интернету')
    return resp
  }

  try {
    const data = await resp.json()
    spinner.classList.add('d-none')
    return data
  } catch (error) {
    createEror('Произошла ошибка, попробуйте обновить страницу позже')
  }

  spinner.classList.add('d-none')
  return null
}

// отрисовка списка
async function renderPage (appUrl) {
  appContainer.innerHTML = ''
  title.textContent = ''
  await loadResource(appUrl).then((itemData) => {
    appContainer.append(render(itemData))
  })
}

// тестирование
const btns = document.querySelectorAll('.btn')
btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    renderPage(item.textContent)
  })
})

renderPage('/api/products?status=200')

// оповещение о соединении
function updateOnlineStatus () {
  if (navigator.onLine) {
    createEror('Соединение с интернетом восстановлено')
    return
  }
  createEror('Соединение с интернетом прервано')
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)
